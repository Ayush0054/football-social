import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./logout.css";
function Logout() {
  let navigate = useNavigate();

  //   const [ref, setRef] = useState(true);
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
    setRef(false);
  };

  return (
    <div>
      <button onClick={handleLogout} className="logout">
        Logout
      </button>
    </div>
  );
}

export default Logout;
