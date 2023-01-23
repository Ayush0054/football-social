import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/client";
import "./login.css";
function Login({ setToken }) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) throw error;
      setToken(data);
      // console.log(data);
      navigate("/Post");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="Page">
      <div className="login">
        <form action="">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button onClick={login}>Login</button>
        </form>
        <p>
          Not a member?{" "}
          <span className="login_register">
            {" "}
            <Link to="/register">Register Now</Link>{" "}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
