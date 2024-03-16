import { useRef } from "react";
import { FaBars, FaTimes, FaMinus, FaEye, FaRegEye } from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {
  const navRef = useRef();

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const minimizeNavbar = () => {
    navRef.current.style.display = "none";
  };

  return (
    <>
      <header>
        <h3 className="logo-text">GreAI</h3>
        <nav ref={navRef}>
          <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn minimize-btn" onClick={minimizeNavbar}>
          <FaMinus />
        </button>
        <button className="nav-btn" onClick={toggleNavbar}>
          <FaBars />
        </button>
      </header>

   
    </>
  );
}

export default Navbar;
