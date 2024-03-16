import React, { useState } from "react";
import { FaHome, FaPhone, FaPause, FaUser, FaCheck } from "react-icons/fa";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import "../Styles/main.css";
import Popover from "./Popover";

const HorizontalLineWithCircles = () => {
  const [active, setActive] = useState(null);

  const toggleActive = (key) => {
    setActive((prev) => (prev === key ? null : key));
  };

  return (
    <div className="horizontal-line">
      <span className="line"></span>
      <div
        className={`circle ${active === "home" ? "active" : ""}`}
        onClick={() => toggleActive("home")}
      >
        {active === "home" && <IoCheckmarkDoneCircleSharp className="tick" />}
        <FaHome className={`icon ${active === "home" ? "active" : ""}`} />
        </div>
      <span className="line"></span>
      <div
        className={`circle ${active === "phone" ? "active" : ""}`}
        onClick={() => toggleActive("phone")}
      >
        {active === "phone" && <IoCheckmarkDoneCircleSharp className="tick" />}
        <FaPhone className={`icon ${active === "phone" ? "active" : ""}`} />
        <Popover isOpen={active === "phone"} onClose={() => setActive(null)} />
      </div>
      <span className="line"></span>
      <div
        className={`circle ${active === "pause" ? "active" : ""}`}
        onClick={() => toggleActive("pause")}
      >
        {active === "pause" && <IoCheckmarkDoneCircleSharp className="tick" />}
        <FaPause className={`icon ${active === "pause" ? "active" : ""}`} />
        <Popover isOpen={active === "pause"} onClose={() => setActive(null)} />
      </div>
      <span className="line"></span>
      <div
        className={`circle ${active === "user" ? "active" : ""}`}
        onClick={() => toggleActive("user")}
      >
        {active === "user" && <IoCheckmarkDoneCircleSharp className="tick" />}
        <FaUser className={`icon ${active === "user" ? "active" : ""}`} />
        
      </div>
      <span className="line"></span>
    </div>
  );
};

export default HorizontalLineWithCircles;
