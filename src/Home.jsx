import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="home">
      {posts && <BlogList posts={posts} user="Tom Smith" title="All Posts" />}
    </div>
  );
};

export default Home;
