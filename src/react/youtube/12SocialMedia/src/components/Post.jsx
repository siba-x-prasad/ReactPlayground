import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";
import { FaComment, FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="container text-center media-action">
          <div className="row">
            <div className="col">
              <FaHeart />
            </div>
            <div className="col">
              <FaComment />
            </div>
            <div className="col">
              <FaShare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
