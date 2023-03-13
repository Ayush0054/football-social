import React from "react";
import "./home.css";
import Lottie from "lottie-react";
import animation from "./player-football.json";
import { Link } from "react-router-dom";
import Login from "../login/login";
import { supabase } from "../../lib/client";
import { useNavigate } from "react-router-dom";

function Home({ setToken, setRef }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
  };
  const style = {
    height: 335,
    width: 335,

    display: "flex",
  };
  const handleLogout = () => {
    sessionStorage.removeItem("token");

    setRef(false);
  };
  handleLogout();

  return (
    <div className="Home-page">
      <div className="homes">
        <div className="contents">
          <h1 className="landing">
            {" "}
            <span className="foot-text">Football</span> Social{" "}
          </h1>
        </div>
        <div className="lottie">
          <Lottie
            animationData={animation}
            options={defaultOptions}
            style={style}
          />
          <Login setToken={setToken} setRef={setRef} />
        </div>
      </div>
      <div class="footer-cols">
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Terms Of Use</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <h3 className="license">© 2023 FOOTBALL-SOCIAL | All rights reserved</h3>
    </div>
  );
}

export default Home;
