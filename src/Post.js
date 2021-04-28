import React, { useState, forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import db from "./firebase";

const Post = forwardRef(
  (
    { displayName, userName, avatar, text, image, verified, time, keys },
    ref
  ) => {
    const [like, setLike] = useState(false);
    const onClickDeletePost = () => {
      db.collection("posts").doc(keys).delete();
    };
    // const onLikeCall = () => {
    //   setLike("liked");

    // };

    //console.log(userName);
    console.log(keys);
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />}
                  {userName} <span className="post__timeStamp">{time}</span>
                  <DeleteIcon
                    className="post__deletePost"
                    onClick={onClickDeletePost}
                    fontSize="small"
                  />
                </span>
              </h3>
            </div>
            <div className="post__headerDiscription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            {like ? (
              <div title="Dislike">
                <FavoriteIcon
                  className="liked"
                  fontSize="small"
                  onClick={() => setLike(!like)}
                  alt="Dislike"
                />
              </div>
            ) : (
              <div title="Like">
                <FavoriteBorderIcon
                  fontSize="small"
                  onClick={() => setLike(!like)}
                  title="Like"
                />
              </div>
            )}
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);
export default Post;
