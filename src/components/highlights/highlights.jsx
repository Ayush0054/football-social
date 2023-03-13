import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import "./highlights.css";
import Lottie from "lottie-react";
import animation from "./rolling-footbll.json";

function Highlights() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
  };
  const style = {
    height: 335,
    width: 335,

    display: "flex",
  };

  const [match, setMatch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const options = {
    method: "GET",
    url: "https://free-football-soccer-videos.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RapidAPI_Key,
      "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
    },
  };
  useEffect(() => {
    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        setMatch(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className="main">
      <div className="srch">
        <input
          type="text"
          placeholder="Search match"
          className="search"
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>
      <div className="fixtures">
        {loading && (
          <Lottie
            animationData={animation}
            options={defaultOptions}
            style={style}
          />
        )}
        {match &&
          match
            .filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .map((mtch, index) => {
              return (
                <div className="content">
                  <div className="name">
                    <h3>{mtch.title}</h3>
                  </div>
                  <div
                    className="ht"
                    dangerouslySetInnerHTML={{ __html: mtch.embed }}
                  ></div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Highlights;
