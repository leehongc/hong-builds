import BlogList from '../../blog/BlogList';

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="blog-post-container">
        <h2 className="section-title">Blog</h2>
          <p className="section-description">
            Here are some of my lastest writings.
          </p>
          <BlogList />
      </div>
    </section>
  );
};

export default Blog;