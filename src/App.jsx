import { useEffect, useState } from "react";
import { supabase } from "./lib/client";
// import { SupabaseClient } from '@supabase/supabase-js'
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Highlights from "./components/highlights/highlights.jsx";
import Home from "./components/home/home";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Post from "./components/post/post";
import Login from "./components/login/login";
import Registration from "./components/registeration/registration";
import Logout from "./components/logout/logout";
import Profile from "./components/profile/profile";
import ProfileUpdate from "./components/profileUpdate/profileUpdate";
function App() {
  // const [ref, setRef] = useState(true);
  const [ref, setRef] = useState(false);
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      console.log(data);
      setToken(data);
      setRef(true);
    }
  }, []);
  return (
    <div className="App">
      {ref && <Navbar token={token} setRef={setRef} />}
      <Routes>
        <Route
          path="/"
          element={<Home setToken={setToken} setRef={setRef} />}
        />
        <Route
          path="/login"
          element={<Login setToken={setToken} setRef={setRef} />}
        />
        <Route path="/register" element={<Registration />} />
      </Routes>

      {token && (
        <Routes>
          <Route path="/profile" element={<Profile token={token} />} />
          <Route path="/post" element={<Post token={token} />} />
          <Route path="highlights" element={<Highlights token={token} />} />
          <Route
            path="/profileUpdate"
            element={<ProfileUpdate token={token} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
