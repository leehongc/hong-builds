import { useState, useEffect } from 'react';
import { formatDate } from '../utils/dateUtils';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogPosts();
  }, []);

  const loadBlogPosts = async () => {
    try {
      // This loads all .md files from the posts folder
      const postModules = import.meta.glob('./posts/*.md', { 
        query: '?raw',
        import: 'default',
        eager: true 
      });

      const postsData = [];

      for (const [path, content] of Object.entries(postModules)) {
        const { parseFrontmatter } = await import('../utils/markdownUtils');
        const { frontmatter } = parseFrontmatter(content);
        
        // Get filename without path and extension
        const filename = path.split('/').pop().replace('.md', '');
        
        postsData.push({
          ...frontmatter,
          slug: frontmatter.slug || filename,
          filename
        });
      }

      // Sort by created date (newest first)
      const sortedPosts = postsData.sort((a, b) => 
        new Date(b.created) - new Date(a.created)
      );

      setPosts(sortedPosts);
    } catch (error) {
      console.error('Error loading blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading posts...</div>;
  }

  if (posts.length === 0) {
    return <div className="text-center py-8">No posts found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <header className="mb-4">
              <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                {post.title}
              </h2>
              
              <div className="text-sm text-gray-600 space-x-4">
                <span>Created: {formatDate(post.created)}</span>
                {post.updated && post.updated !== post.created && (
                  <span>Updated: {formatDate(post.updated)}</span>
                )}
              </div>
              
              {post.tags && (
                <div className="mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>
            
            {post.excerpt && (
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
            )}
            
            <div className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
              Read more →
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;