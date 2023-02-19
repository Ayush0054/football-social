import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import "./profiledisplay.css";
import { supabase } from "../../../lib/client";
function ProfileDisplay({ setOpinion, opinion, token }) {
  // const [fetchError, setFetchError] = useState(null);
  // const [link, setLink] = useState("");
  // const [image, setImage] = useState("");
  // const fetchdetails = async () => {
  //   e.preventDefault();
  //   const { data, error } = await supabase
  //     .from("links")
  //     .select("twitter") //`content,images, users (raw_user_meta_data)`
  //     .eq("user_name", token.session.user.user_metadata.name);
  //   if (error) {
  //     setFetchError("could not fetch the opnion");
  //     setLink(null);
  //     console.log(error);
  //   }
  //   if (data) {
  //     setLink(data);
  //     setFetchError(null);
  //   }
  // };
  // const fetchImage = async () => {
  //   const { data, error } = await supabase
  //     .from("pfp")
  //     .select("photo") //`content,images, users (raw_user_meta_data)`
  //     .order("id");
  //   if (error) {
  //     setFetchError("could not fetch the opnion");
  //     setImage(null);
  //     console.log(error);
  //   }
  //   if (data) {
  //     setImage(data);
  //     setFetchError(null);
  //   }
  // };

  // useEffect(() => {
  //   fetchdetails();
  //   fetchImage();
  // }, []);

  console.log(token.session.user.user_metadata.image.publicUrl);
  return (
    <div className="profile-details">
      <div className="yes">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR00Z3totggyaGDo_l-7_-xlIBjXygktXx3g&usqp=CAU"
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
          <a href={token.session.user.user_metadata.link}>Link</a>
        </div>
      </div>
    </div>
  );
}

export default ProfileDisplay;
