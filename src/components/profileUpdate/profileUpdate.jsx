import React, { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../../lib/client";
import "./profileUpdate.css";
function ProfileUpdate() {
  const [input, setInput] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

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
  };
  /////////////////////////////////////////////////////////////////////
  const sendDetails = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("profile_data")
      .insert({
        twitter: input,
        // photo: image_url,
      })
      .select("twitter");
    if (error) {
      console.log(error);
    }
    if (data) {
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
      alert("name changed");
    } catch (error) {
      alert(error);
    }
  };
  ////////////////////

  return (
    <div className="profile-update">
      <form action="">
        <input
          type="file"
          accept="image/*"
          onChange={uploadimage}
          disabled={uploading}
        />
        <button>update</button>
      </form>
      <form action="" onSubmit={updateEmail}>
        <input
          type="email"
          placeholder="update email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>update</button>
      </form>
      <form action="/profile" onSubmit={updateName}>
        <input
          type="text"
          placeholder="update name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>update</button>
      </form>
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
  );
}

export default ProfileUpdate;
