import React from "react";
import "../Styles/ChatComponent.css"; // Import the CSS file for styling
import { IoMdPerson } from "react-icons/io";
import { BsRobot } from "react-icons/bs";

const ChatComponent = () => {
  return (
    <div className="chat-component">
      <div className="chat-bubbles-section">
        <div className="section1">
          <div className="icon-wrapper blue-bg">
            <BsRobot className="roboicon" />
          </div>
          <div className="chat-bubble">
            <div className="bubble-text">
              Hi, I'm Good Rob!Choose your option so we can help you
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="icon-wrapper blue-bg">
            <IoMdPerson className="usericon" />
          </div>
          <div className="chat-bubble">
            <div className="bubble-text">Option 1</div>
          </div>
        </div>
      </div>
 
      <div className="option-buttons-section">
    
        <button className="option-button">1. Technical Problem</button>
        <button className="option-button">2. Change your plan</button>
        <button className="option-button">2. Change your plan</button>
      </div>
    </div>
  );
};

export default ChatComponent;
