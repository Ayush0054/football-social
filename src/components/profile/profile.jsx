import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/client";
import "./profile.css";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ProfileDisplay from "./profiledisplay/profiledisplay";
function Profile({ token }) {
  const [fetchError, setFetchError] = useState(null);
  const [opinion, setOpinion] = useState([]);
  const fetchOpnion = async () => {
    const { data, error } = await supabase
      .from("opinion")
      .select() 
      .eq("user_name", token.session.user.user_metadata.name)
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

  const deleteOpinion = async (postid) => {
    const { user } = token;
    const { error } = await supabase
      .from("opinion")
      .delete()
      .order("id")
      .eq("id", postid);
    if (error) {
      console.log(error);
    }
    fetchOpnion();

  };

  return (
    <div className="profile">
      <div className="display-edit">
        <ProfileDisplay
          setOpinion={setOpinion}
          opinion={opinion}
          token={token}
        />
        <div className="edit-profile">
          <Link to="/profileUpdate">
            Edit Profile <EditIcon className="edit-icon" />
          </Link>
        </div>
      </div>
      {/* --------------------------------------------------------------------fetched opnions --------------------------------------------- */}
      <div className="myopnions">
        {fetchError && <h3>{fetchError}</h3>}
        {opinion && (
          <div className="idk2">
            {/* <FlipMove> */}

            {opinion.map((masti) => {
              return (
                <div className="main-content2" key={masti.id}>
                  <div className="avatar-name2"></div>
                  <div className="all-contents2">
                    {masti.content === "" ? (
                      ""
                    ) : (
                      <h3 className="para2">{masti.content}</h3>
                    )}
                    {masti.images === "" ? (
                      ""
                    ) : (
                      <img
                        className="content-image2"
                        src={masti.images}
                        alt="image not uploaded"
                      />
                    )}
                  </div>
                  <button
                    className="profile-post-delete"
                    onClick={() => deleteOpinion(masti.id)}
                  >
                    delete it
                  </button>
                </div>
              );
            })}
            {/* </FlipMove> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
