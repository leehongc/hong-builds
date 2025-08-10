import { useState, useEffect } from 'react';
import { formatDate } from '../utils/dateUtils';
import { parseFrontmatter } from '../utils/markdownUtils';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const postModules = import.meta.glob('./posts/*.md', { 
          query: '?raw',
          import: 'default',
          eager: true 
        });

        const postsData = Object.entries(postModules).map(([path, content]) => {
          const { frontmatter } = parseFrontmatter(content);
          const filename = path.split('/').pop().replace('.md', '');
          
          return {
            ...frontmatter,
            slug: frontmatter.slug || filename
          };
        });

        // Sort by created date (newest first)
        setPosts(postsData.sort((a, b) => new Date(b.created) - new Date(a.created)));
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <div className="text-center py-8">Loading posts...</div>;
  if (posts.length === 0) return <div className="text-center py-8">No posts found.</div>;

  return (
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white border-b border-gray-200 p-7 rounded-lg">
            <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors cursor-pointer">
              {post.title}
            </h2>
            
            <div className="text-sm text-gray-600 mb-3">
              <span>{formatDate(post.created)}</span>
              {post.updated && post.updated !== post.created && (
                <span> • Updated {formatDate(post.updated)}</span>
              )}
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="mb-4">
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
            
            <Link 
              to={`/blog/${post.slug}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
  );
};

export default BlogList;