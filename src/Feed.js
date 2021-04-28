import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
        setId(snapshot.docs.map((doc) => doc.id));
      });
  }, []);
  // console.log(id);
  //console.log(posts);
  console.log(id);
  return (
    <div className="feed">
      <div className="feed__header">
        {" "}
        <h2>Home</h2>
      </div>
      <TweetBox />

      <FlipMove>
        {posts.map((data, i) =>
          id.map((id, index) =>
            i === index ? (
              <Post
                displayName={data.displayName}
                userName={data.userName}
                avatar={data.avatar}
                text={data.text}
                image={data.image}
                verified={data.verified}
                time={data.time}
                keys={id}
                
              />
            ) : //console.log(typeof id)
            null
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;
