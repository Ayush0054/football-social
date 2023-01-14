import React, { useState } from 'react'
import { supabase } from '../../lib/client';
import "./login.css"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [name, setName] = useState(""); 

const login = async(e) =>{ 
  e.preventDefault();
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'example@email.com',
  password: 'example-password',
})

}
  return (
    <div className='Page'>
        <div className="login">
        <form action="">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='password' />
            <button onClick={login}>register/Login</button>
        </form>
        <p>
     Not a member?{" "}
     {/* <span className='login_register' onClick={register}>Register Now</span> */}
     </p>
        </div>
    </div>
  )
}

export default Login
