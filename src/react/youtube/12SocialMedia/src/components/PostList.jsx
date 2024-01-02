import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomePage from "./WelcomePage";

const PostList = () => {
  // const [isOnline, setOnline] = useState(true);
  // setOnline(navigator.onLine);
  const { postList, addInitialPost } = useContext(PostListData);
  const handleFetchPost = () => {
    console.log(`handleFetchPost`);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        addInitialPost(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 ? (
        <WelcomePage onFetchPost={handleFetchPost} />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
};

export default PostList;
