import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Highlights from "../highlights/highlights";
import Home from "../home/home";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logout from "../logout/logout";
import { supabase } from "../../lib/client";

function Navbar({ setRef, token }) {
  let navigate = useNavigate();

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
      <div className="Logo-div">
        <h1 className="Logo-football">
          Football<span className="Logo-social">Social</span>
        </h1>
      </div>
      <div className="hide">
        <Link to="/post">
          <h3 className="foot">All About Football</h3>
        </Link>
        <Link to="/highlights">
          <h3 className="news">Highlights</h3>
        </Link>

        <div class="dropdown">
          <img
            src={token.session.user.user_metadata.image}
            alt="imgs"
            className="avtar-image"
          />
          <div class="dropdown-content">
            <Link to="/profile">
              <h3 className="profile-link"> Profile</h3>
            </Link>
            <button onClick={handleLogout} className="logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
