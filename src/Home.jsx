import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {isLoading && <div>Loading ...</div>}
      {posts && <BlogList posts={posts} user="Tom Smith" title="All Posts" />}
    </div>
  );
};

export default Home;
