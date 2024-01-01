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

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {(() => {
            if (selectedTab === "Home") {
              return <PostList></PostList>;
            } else if (selectedTab === "Create Post") {
              return <CreatePost></CreatePost>;
            } else if (selectedTab === "Saved Post") {
              return <SavedPostList></SavedPostList>;
            } else if (selectedTab === "Friends") {
              return <Friends></Friends>;
            } else if (selectedTab === "Groups") {
              return <Groups></Groups>;
            }
          })()}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
