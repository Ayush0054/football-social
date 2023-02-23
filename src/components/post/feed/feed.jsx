import React, { useEffect, useState } from "react";
import NotesIcon from "@mui/icons-material/Notes";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import "./feed.css";
import { supabase } from "../../../lib/client";
import FlipMove from "react-flip-move";
import { motion } from "framer-motion";
function Feed({ token }) {
  const [image, setImage] = useState("");
  const [input, setInput] = React.useState("");
  const [post, setPost] = React.useState([]);
  //supabase
  const [formError, setFormError] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [opinion, setOpinion] = useState([]);
  const fetchOpnion = async () => {
    const { data, error } = await supabase
      .from("opinion")
      .select() //`content,images, users (raw_user_meta_data)`
      .order("id", { ascending: false });
    if (error) {
      setFetchError("could not fetch the opnion");
      setOpinion(null);
      console.log(error);
    }
    if (data) {
      setOpinion(data);
      setFetchError(null);
    }
  };

  useEffect(() => {
    fetchOpnion();
  }, []);

  const sendOpinion = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("opinion").insert({
      content: input,
      images: image,
      user_name: token.session.user.user_metadata.name,
      dp: token.session.user.user_metadata.image,
      social_link: token.session.user.user_metadata.link,
    });
    // .select()
    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly.");
    }
    if (data) {
      setFormError(null);
      // navigate('/post')
    }
    fetchOpnion();
    setInput("");
    setImage("");
  };

  return (
    <div className="main-area">
      <div className="post">
        <form action="/post" onSubmit={sendOpinion}>
          <div className="ip">
            <NotesIcon />
            <textarea
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows="5"
              cols="40"
            />
          </div>
          <div className="ip2">
            <InsertPhotoIcon />
            <input
              className="photo"
              type="link"
              value={image}
              placeholder="image link"
              onChange={(e) => setImage(e.target.value)}
            ></input>
            <button type="submit" className="submit">
              post
            </button>
          </div>
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
      {/* user post */}

      {fetchError && <h3>{fetchError}</h3>}
      {opinion && (
        <div className="idk">
          <FlipMove>
            {opinion.map((masti) => {
              return (
                <div className="main-content" key={masti.id}>
                  <div className="avatar-name">
                    <img src={masti.dp} alt="DP" className="avatar_dp" />
                    <h6 className="userName">{masti.user_name}</h6>
                    <a href={masti.social_link}>twitter Link</a>
                  </div>
                  <div className="all-contents">
                    {masti.content === "" ? (
                      ""
                    ) : (
                      <h3 className="para">{masti.content}</h3>
                    )}
                    {masti.images === "" ? (
                      ""
                    ) : (
                      <img
                        className="content-image"
                        src={masti.images}
                        alt="image not uploaded"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </FlipMove>
        </div>
      )}
    </div>
  );
}

export default Feed;
