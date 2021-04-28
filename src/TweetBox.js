import React, { useState, useRef } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

const TweetBox = () => {
  //const [tweetMessage, setTweetMessage] = useState("");
  const tweetMsgRef = useRef();
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e?.preventDefault();
    var date = new Date();
    var timestamp = date.getTime();
    const time = String(date).slice(16, 21).concat(String(date).slice(3, 11));
    if (tweetImage || tweetMsgRef.current.value) {
      db.collection("posts").add({
        avatar:
          "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
        displayName: "Prince Jain",
        image: tweetImage,
        text: tweetMsgRef.current.value,
        userName: "cleverPrince",
        verified: true,
        timestamp: timestamp,
        time: time,
      });
    }

    setTweetImage("");
    //setTweetMessage("");
    tweetMsgRef.current.value = null;
  };

  const callTweetInput = (e) => {
    //console.log(tweetMsgRef.current?.value);
    if (e.which === 13) {
      sendTweet();
      //
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input
            //value={tweetMessage}
            placeholder="What's happening ?"
            type=" text"
            ref={tweetMsgRef}
            onChange={(e) => callTweetInput(e)}
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          placeholder="Optional: Enter image url"
          type="text"
          className="tweetBox__imageInput"
        />
        <Button
          onClick={(e) => sendTweet(e)}
          type="submit"
          className="tweetBox__tweetButton"
        >
          TWEET{" "}
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;

// onClick = {(e) => sendTweet(e)}
// onKeyDown = {(e) => sendTweet(e)}
// className = "ui form"
