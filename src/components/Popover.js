import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import eyeIcon from "../asserts/eyeIcon.png";
import eyeOffIcon from "../asserts/eyeOffIcon.png";
import "../Styles/Popover.css";
import ChatComponent from "./ChatComponent";
import Feedback from "./Feedback";

const Popover = ({ isOpen, onClose }) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  if (!isOpen) return null;

  const toggleSectionVisibility = () => {
    setIsSectionVisible(!isSectionVisible);
  };
  return (
    <div className="popover" onClick={onClose}>
      <div className="popover-content">
        <b>Resume of transcription</b>
        <p>
          The customer said the{" "}
          <span className="highlighted-text">
            signal was lost this afternoon
          </span>{" "}
          and request an support through technical visit. He confirmed that{" "}
          <span className="highlighted-text">
            made all steps to reset the equipment,
          </span>{" "}
          but the problem keep happening. Was suggest to wait some couple of
          hoursto restore the signal into the area, but the customer was
          impatient.
        </p>
        <div className="blue-box-container">
          <div className="blue-box"></div>
          <span>Click to shift to</span>
        </div>
        <b className="transcription-heading">Transcription detailed</b>
        <div className="eye-icon-container" onClick={toggleSectionVisibility}>
          <img
            src={isSectionVisible ? eyeIcon : eyeOffIcon}
            alt="Eye icon"
            style={{ width: "24px", height: "24px" }} 
          />
        </div>
        <div>Click to show</div>
        {isSectionVisible && <ChatComponent />}
      </div>
      <Feedback />
    </div>
  );
};

export default Popover;
