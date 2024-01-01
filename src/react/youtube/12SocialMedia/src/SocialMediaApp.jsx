import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import Friends from "./components/Friends";
import Groups from "./components/Groups";
import SavedPostList from "./components/SavedPostList";
import PostListProvider from "./store/post-list-store";


// https://github.com/KG-Coding-with-Prashant-Sir/React_Complete_YouTube/tree/main/Projects/7-social-media
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const getSelectedTab = () => {
    switch (selectedTab) {
      case "Home":
        return <PostList></PostList>;
      case "Create Post":
        return <CreatePost></CreatePost>;
      case "Saved Post":
        return <SavedPostList></SavedPostList>;
      case "Friends":
        return <Friends></Friends>;
      case "Groups":
        return <Groups></Groups>;
    }
  };

  return (
    <PostListProvider>
      <>
        <div className="appContainer">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="content">
            <Header></Header>
            {getSelectedTab()}
            <Footer></Footer>
          </div>
        </div>
      </>
    </PostListProvider>
  );
}

export default App;
