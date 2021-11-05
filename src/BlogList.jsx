import React from "react";

const BlogList = ({ posts, title, user }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {posts.map((post) => (
        <div className="blog-preview" key={post.id}>
          <h2>{post.title}</h2>
          <p>Written by {user}</p>
        </div>
      ))}
      <button>Click me</button>
    </div>
  );
};

export default BlogList;
