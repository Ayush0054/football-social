import React, { useState } from "react";
import { useEffect } from "react";
import { redirect } from "react-router-dom";
import { supabase } from "../../lib/client";
import "./profileUpdate.css";
function ProfileUpdate({ token, url }) {
  const [input, setInput] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadimage = async (e) => {
    try {
      setUploading(true);
      if (!e.target.files || e.target.files.length === 0) {
        throw new Error("you must select an image to upload.");
      }
      const file = e.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { data, error: uploadError } = await supabase.storage
        .from("posts")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        throw uploadError;
      }
      downloadImage(data);
      console.log("data", data);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  const downloadImage = async (media) => {
    const { data, error } = supabase.storage
      .from("posts")
      .getPublicUrl(media.path);
    if (error) {
      throw error;
    }
    console.log(data);
    setAvatarUrl(data.publicUrl);
  };

  /////////////////////////////////////////////////////////////////////
  const sendDetails = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: { link: input },
      });
      const { errors } = await supabase
        .from("opinion")
        .update({ social_link: input })
        .eq("user_id", token.user.id);
      if (error) throw error;
      await supabase.auth.signOut();
      window.location.href = "/";
      alert("social link changed relogin to see the change");
    } catch (error) {
      alert(error);
    }
    setInput("");
  };
  const sendImageDetails = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: { image: avatarUrl },
      });
      if (error) throw error;

      const { errors } = await supabase
        .from("opinion")
        .update({ dp: avatarUrl })
        .eq("user_id", token.user.id);

      await supabase.auth.signOut();
      window.location.href = "/";

      alert("image is changed relogin to see the change");
    } catch (error) {
      alert(error);
    }
  };

  ////////////////////////////////

  const updateEmail = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.updateUser({
        email: email,
        options: {
          data: {
            name: name,
          },
        },
      });
      if (error) throw error;
      await supabase.auth.signOut();
      window.location.href = "/";
      alert("check your email for verification llink");
    } catch (error) {
      alert(error);
    }
  };
  const updateName = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: { name: name },
      });
      const { errors } = await supabase
        .from("opinion")
        .update({ user_name: name })
        .eq("user_id", token.user.id);
      if (error) throw error;

      await supabase.auth.signOut();
      window.location.href = "/";
      alert("name changed relogin to see the change");
    } catch (error) {
      alert(error);
    }
  };
  ////////////////////

  return (
    <div className="profile-update">
      <div className="all-update">
        <div className="image-update">
          <input
            type="file"
            id="single"
            accept="image/*"
            onChange={uploadimage}
            disabled={uploading}
          />

          <button onClick={sendImageDetails} className="update-button">
            update
          </button>
        </div>

        <div className="link-email-name-update">
          <form action="" onSubmit={sendDetails}>
            <input
              type="text"
              placeholder="social link"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="update-button">update</button>
          </form>
        </div>

        <div className="link-email-name-update">
          <form action="" onSubmit={updateEmail}>
            <input
              type="email"
              placeholder="update email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="update-button">update</button>
          </form>
        </div>

        <div className="link-email-name-update">
          <form action="/profile" onSubmit={updateName}>
            <input
              type="text"
              placeholder="update name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="update-button">update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
