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
      {posts && <BlogList posts={posts} author="Tom Smith" title="All Posts" />}
    </div>
  );
};

export default Home;
