import React from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading ...</div>}
      {posts && <BlogList posts={posts} user="Tom Smith" title="All Posts" />}
    </div>
  );
};

export default Home;
