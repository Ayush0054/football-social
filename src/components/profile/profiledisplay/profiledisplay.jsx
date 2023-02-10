import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import "./profiledisplay.css";
import { supabase } from "../../../lib/client";
function ProfileDisplay({ setOpinion, opinion, token }) {
  const [fetchError, setFetchError] = useState(null);
  const [link, setLink] = useState([]);
  const downloadImage = async (path) => {
    try {
      const { data, error } = await supabase.storage
        .from("avatar")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      // setAvatarUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  };

  const fetchdetails = async () => {
    const { data, error } = await supabase
      .from("profile_data")
      .select("twitter") //`content,images, users (raw_user_meta_data)`
      .order("id");
    if (error) {
      setFetchError("could not fetch the opnion");
      setLink(null);
      console.log(error);
    }
    if (data) {
      setLink(data);
      setFetchError(null);
    }
  };

  useEffect(() => {
    fetchdetails();
  }, []);

  return (
    <div className="profile-details">
      <img src={""} alt="img" className="profile-image" />
      <h2 className="profile-name">{token.session.user.user_metadata.name}</h2>
      <h2 className="profile-email">{token.session.user.email}</h2>
      <Link to="/profileUpdate">
        <EditIcon className="edit-icon" />
      </Link>
      {/* {link && ( */}
      {link.map((tweet) => {
        return <a href={tweet.twitter}>Link</a>;
      })}
      {/* )} */}
    </div>
  );
}

export default ProfileDisplay;
