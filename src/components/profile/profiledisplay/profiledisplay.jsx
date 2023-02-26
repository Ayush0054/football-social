import React, { useContext, useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import "./profiledisplay.css";
import { supabase } from "../../../lib/client";

function ProfileDisplay({ setOpinion, opinion, token }) {
  return (
    <div className="profile-details">
      <div className="yes">
        <img
          src={token.session.user.user_metadata.image}
          alt="imgs"
          className="profile-image"
        />
      </div>

      <div className="profile-div1">
        <h2 className="profile-name">
          {token.session.user.user_metadata.name}
        </h2>
        <h2 className="profile-email">{token.session.user.email}</h2>

        <div className="idkkk">
          <a href={token.session.user.user_metadata.link}>twitter</a>
        </div>
      </div>
    </div>
  );
}

export default ProfileDisplay;
