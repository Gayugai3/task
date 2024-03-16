import { FaEye } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import HorizontalLineWithCircles from "./components/HorizontalLineWithCircles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FaEyeIcon />
      <Searchbar />
      <HorizontalLineWithCircles />
    </div>
  );
}

const FaEyeIcon = () => (
  <div className="eye-icon">
    <FaEye style={{ fontSize: "30px" }} />
  </div>
);
export default App;
