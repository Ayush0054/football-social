import React, { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../../lib/client";
import "./profileUpdate.css";
function ProfileUpdate({ token, url }) {
  const [input, setInput] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (avatarUrl) downloadImage(avatarUrl);
  }, [avatarUrl]);

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
      let { error: uploadError } = await supabase.storage
        .from("posts")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
    // downloadImage();
  };

  const downloadImage = async (path) => {
    try {
      const { data, error } = await supabase.storage
        .from("posts")
        .getPublicUrl(path);
      if (error) {
        throw error;
      }

      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
      console.log(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  };

  /////////////////////////////////////////////////////////////////////
  const sendDetails = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: { link: input },
      });
      if (error) throw error;
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
      alert("social link changed relogin to see the change");
    } catch (error) {
      alert(error);
    }
  };

  ////////////////////////////////
  // ({ email: "new@email.com" });

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
      if (error) throw error;
      alert("name changed relogin to see the change");
    } catch (error) {
      alert(error);
    }
  };
  ////////////////////

  return (
    <div className="profile-update">
      <div className="image-update">
        {/* <form action=""></form> */}
        <input
          type="file"
          id="single"
          accept="image/*"
          // value={image}
          onChange={uploadimage}
          disabled={uploading}
        />

        <button onClick={sendImageDetails}>update</button>
      </div>

      <div className="link_update">
        <form action="" onSubmit={sendDetails}>
          <input
            type="text"
            placeholder="social link"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>update</button>
        </form>
      </div>

      <div className="email-update">
        <form action="" onSubmit={updateEmail}>
          <input
            type="email"
            placeholder="update email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>update</button>
        </form>
      </div>

      <div className="name-update">
        <form action="/profile" onSubmit={updateName}>
          <input
            type="text"
            placeholder="update name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button>update</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileUpdate;
