import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { formatDate } from '../utils/dateUtils';
import { parseFrontmatter } from '../utils/markdownUtils';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const postModules = import.meta.glob('./posts/*.md', { 
          query: '?raw',
          import: 'default',
          eager: true 
        });

        let foundPost = null;

        for (const [path, content] of Object.entries(postModules)) {
          const { frontmatter, content: body } = parseFrontmatter(content);
          const filename = path.split('/').pop().replace('.md', '');
          const postSlug = frontmatter.slug || filename;

          if (postSlug === slug) {
            foundPost = {
              ...frontmatter,
              slug: postSlug,
              body
            };
            break;
          }
        }

        if (!foundPost) {
          setError('Post not found');
        } else {
          setPost(foundPost);
        }
      } catch (err) {
        setError('Error loading post');
        console.error('Error loading post:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="text-center">Loading post...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <article className="max-w-4xl mx-auto px-4">
        <header className="mb-8">
          <Link 
            to="/#blog" 
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Back to blog
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="text-sm text-gray-600 mb-4">
            <span>{formatDate(post.created)}</span>
            {post.updated && post.updated !== post.created && (
              <span> • Updated {formatDate(post.updated)}</span>
            )}
          </div>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-sm">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;