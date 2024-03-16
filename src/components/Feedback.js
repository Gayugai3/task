import React, { useState } from "react";
import "../Styles/Feedback.css";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

import { ImSad } from "react-icons/im";
import { BsEmojiNeutral } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { ImSad2 } from "react-icons/im";
import { BsEmojiNeutralFill } from "react-icons/bs";
import { BsEmojiSmileFill } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";

function Feedback() {
  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleLikeClick = () => {
    setLikeClicked(true);
    setDislikeClicked(false);
  };

  const handleDislikeClick = () => {
    setLikeClicked(false);
    setDislikeClicked(true);
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div className="divided-div-container">
      <div className="left-partition">
        <p className="text-content">Client's emotion</p>
        <div className="emoji-container">
          <div
            className={`emoji-item ${
              selectedEmoji === "sad" ? "selected" : ""
            }`}
          >
            <ImSad2
              onClick={() => handleEmojiClick("sad")}
              style={{
                cursor: "pointer",
                color: selectedEmoji === "sad" ? "red" : "#deb8b9",
              }}
            />
          </div>
          <div
            className={`emoji-item ${
              selectedEmoji === "bad" ? "selected" : ""
            }`}
          >
            <ImSad2
              onClick={() => handleEmojiClick("bad")}
              style={{
                cursor: "pointer",
                color: selectedEmoji === "bad" ? "orange" : "#ffbf6f",
              }}
            />
          </div>
          <div
            className={`emoji-item ${
              selectedEmoji === "meh" ? "selected" : ""
            }`}
          >
            <BsEmojiNeutralFill
              onClick={() => handleEmojiClick("meh")}
              style={{
                cursor: "pointer",
                color: selectedEmoji === "meh" ? "#ffd116" : "#ffe373",
              }}
            />
          </div>
          <div
            className={`emoji-item ${
              selectedEmoji === "good" ? "selected" : ""
            }`}
          >
            <BsEmojiSmileFill
              onClick={() => handleEmojiClick("good")}
              style={{
                cursor: "pointer",
                color: selectedEmoji === "good" ? "#16ff17" : "lightgreen",
              }}
            />
          </div>
          <div
            className={`emoji-item ${
              selectedEmoji === "best" ? "selected" : ""
            }`}
          >
            <BsEmojiSmileFill
              onClick={() => handleEmojiClick("best")}
              style={{
                cursor: "pointer",
                color: selectedEmoji === "best" ? "#0ba80b" : "#85d485",
              }}
            />
          </div>
        </div>

        <div className="horizontal-bar">
          <span style={{ color: "red" }}>-</span>
          <div className="bar"></div>
          <span style={{ color: "#0ba80b", fontSize: "15px" }}>+</span>
        </div>

        <div className="user-info">
          <HiUserCircle className="user-icon" />
          <span className="user-name">Augusto Coimbra</span>
        </div>
      </div>
      <div className="right-partition">
        <p className="text-content">Tip's from GreAI</p>
        <div className="detailContent">
          <p>Show confidence; </p>
          <p>
            May be telling them that you will resolve the issue soon would be
            good.
          </p>
          <div className="LikeDislike">
            <AiFillLike
              onClick={handleLikeClick}
              style={{
                color: likeClicked ? "#359ede" : "grey",
                cursor: "pointer",
              }}
            />
            <AiFillDislike
              onClick={handleDislikeClick}
              style={{
                color: dislikeClicked ? "#359ede" : "grey",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
