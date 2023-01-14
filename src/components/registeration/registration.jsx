import React, { useState } from 'react'
import { supabase } from '../../lib/client';
import "./registration.css"
function Registration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(""); 
  
    const  create = async(e) =>{
      e.preventDefault();
      try {
    const { data, error } = await supabase.auth.signUp(
      {
      email:email,
      password:password,
      options:{
        data:{
          name:name
        }
      }
    }
    ); 
    if (error) throw error
    alert('check your email for verification llink')
  
      } catch (error) {
        alert(error)
      }
  }
  return (
    <div>
      <div className='Page'>
        <div className="registration">
        <form action="">

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='password' />
            <button onClick={create}>register</button>
        </form>
        <p>
     Already a member?{" "}
     {/* <span className='login_register' onClick={register}>Login</span> */}
     </p>
        </div>
    </div>
    </div>
  )
}

export default Registration
