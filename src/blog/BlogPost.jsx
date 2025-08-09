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
    <div className="blog-post-container">
      <article className="blog-post-article">
        <header className="blog-post-header">
          <Link 
            to="/#blog" 
            className="blog-post-back-link"
          >
            ← Back to blog
          </Link>
          
          <h1 className="blog-post-title">{post.title}</h1>
          
          <div className="blog-post-meta">
            <span>{formatDate(post.created)}</span>
            {post.updated && post.updated !== post.created && (
              <span> • Updated {formatDate(post.updated)}</span>
            )}
          </div>
          
          {post.tags && post.tags.length > 0 && (
            <div className="blog-post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-post-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="blog-post-content">
          <div className="blog-markdown">
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;