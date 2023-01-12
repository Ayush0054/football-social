import React from 'react'
import "./login.css"
function Login() {
  return (
    <div className='Page'>
        <div className="login">
        <form action="">

            <input type="text" placeholder='Name' />
            <input type="text" placeholder='usename' />
            <input type="text" placeholder='email'/>
            <input type="text" placeholder='password' />
            <button>register</button>
        </form>

        </div>
    </div>
  )
}

export default Login
