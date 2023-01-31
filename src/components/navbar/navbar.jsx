import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Highlights from "../highlights/highlights";
import Home from "../home/home";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Home from './components/home/home'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logout from "../logout/logout";
import { supabase } from "../../lib/client";

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "navbar") {
//     x.className += " responsive";
//   } else {
//     x.className = "navbar";
//   }
// }
function Navbar({ setRef }) {
  let navigate = useNavigate();

  // const [ref, setRef] = useState(true);
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
    setRef(false);
  };

  //or
  const handleLogout2 = async () => {
    // sessionStorage.removeItem("token");
    await supabase.auth.signOut();
    navigate("/");
    setRef(false);
  };

  return (
    <div className="navbar">
      {/* {ref && ( */}
      <div className="hide">
        <Link to="/post">
          <div className="foot">All About Football</div>
        </Link>
        <Link to="/highlights">
          <div className="news">Highlights</div>
        </Link>
        <button onClick={handleLogout} className="logout">
          Logout
        </button>
        {/* <Logout setRef={setRef} /> */}
      </div>
      {/* )} */}
    </div>
  );
}

export default Navbar;
