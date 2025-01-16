import { Link } from "react-router-dom";

export default function BlogList({ blogs, title }) {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => {
        return (
          <div className="blogPreview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h1>{blog.title}</h1>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
