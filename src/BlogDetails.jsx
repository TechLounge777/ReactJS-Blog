import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = ({ author }) => {
  const { id } = useParams();
  const {
    data: posts,
    error,
    isPending,
  } = useFetch("https://jsonplaceholder.typicode.com/posts/" + id);
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {posts && (
        <article>
          <h2>{posts.title}</h2>
          <p>Written by {author}</p>
          <div>{posts.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
