import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Highlights from "../highlights/highlights";
import Home from "../home/home";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Home from './components/home/home'
import { useNavigate } from "react-router-dom";

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "navbar") {
//     x.className += " responsive";
//   } else {
//     x.className = "navbar";
//   }
// }
function Navbar({ token }) {
  let navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navbar" id="myTopnav">
      {/* <Link to="/">

      <a className='home'>Home</a>
     </Link>  */}
      <Link to="/post">
        <div className="foot">All About Football</div>
      </Link>

      <Link to="/highlights">
        <div className="news">Highlights</div>
      </Link>

      <button onClick={handleLogout}>Logout</button>
      {/* <Link to="/login">
      <a className='logins'>Login</a>
     </Link> */}
      {/* <a  class="icon" onclick="myFunction()">
     <MenuIcon fontSize='large' color='tertiary'/>
  </a> */}
    </div>
  );
}

export default Navbar;
