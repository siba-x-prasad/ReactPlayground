import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomePage from "./WelcomePage";

const PostList = () => {
  // const [isOnline, setOnline] = useState(true);
  // setOnline(navigator.onLine);
  const { postList, addInitialPost } = useContext(PostListData);
  const [dataFetched, setDataFetched] = useState(false);

  if (!dataFetched) {
    handleFetchPost();
  }

  const handleFetchPost = () => {
    console.log(`handleFetchPost`);
    setDataFetched(true);
    setTimeout(function () {}, 20000);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        addInitialPost(data.posts);
        setDataFetched(false);
      });
  };

  return (
    <>
      {dataFetched ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : postList.length === 0 ? (
        <WelcomePage onFetchPost={handleFetchPost} />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
};

export default PostList;
