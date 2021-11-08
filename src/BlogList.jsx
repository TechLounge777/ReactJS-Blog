import { Link } from "react-router-dom";

const BlogList = ({ posts, title, user }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {posts.slice(0, 2).map((post) => (
        <div className="blog-preview" key={post.id}>
          <Link to={`/blogs/${post.id}`}>
            <h2>{post.title}</h2>
            <p>Written by {user}</p>
          </Link>
        </div>
      ))}
      <button>Click me</button>
    </div>
  );
};

export default BlogList;
