import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addFavoritePost: () => {},
  addInitialPost: () => {}
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    console.log(`ADD_INITIAL_POSTS = ${action.payload.posts}`);
    newPostList = action.payload.posts;
  } else if (action.type === "FAVORITE_POST") {
    newPostList = newPostList.map((post) => {
      if (post.id === action.payload.postId) {
        return {
          id: post.id,
          title: post.title,
          body: post.body,
          reactions: post.reactions,
          userId: post.userId,
          tags: post.tags,
          isFavorite: !post.isFavorite
        };
      } else {
        return post;
      }
    });
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
        isFavorite: false
      }
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId
      }
    });
  };

  const addFavoritePost = (postId) => {
    dispatchPostList({
      type: "FAVORITE_POST",
      payload: {
        postId
      }
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts
      }
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addFavoritePost, addInitialPost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
    isFavorite: false
  },
  {
    id: "2",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
    isFavorite: false
  }
];

export default PostListProvider;
