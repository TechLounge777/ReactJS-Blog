import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw Error("couldn't fetch the data for that resource");
        }
        return res.json();
      })

      .then((data) => {
        setPosts(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading ...</div>}
      {posts && <BlogList posts={posts} user="Tom Smith" title="All Posts" />}
    </div>
  );
};

export default Home;
