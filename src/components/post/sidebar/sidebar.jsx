import React from "react";
import "./sidebar.css";
import SportsIcon from "@mui/icons-material/Sports";
import tweets from "./tweets";
function Sidebar() {
  return (
    <div className="sidebar">
      {tweets.map((index) => {
        return (
          <div className="newss" key={index.id}>
            <SportsIcon />
            <h3 className="headline" >
              {index.text}
            </h3>
            <img
              src={index.media_url}
          
              className="image"
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
