import React from 'react'
import { Link } from 'react-router-dom'
import Highlights from '../highlights/highlights'
import Home from '../home/home'
import "./navbar.css"
// import Home from './components/home/home'
function Navbar() {
  return (
    <div className='navbar'>
     <Link to="/">

      <h3 className='home'>Home</h3>
     </Link> 
     <Link to="/post">
      <h3 className='foot'>All About Football</h3>
     </Link>
  
     <Link to="/highlights">
      <h3 className='news'>Highlights</h3>
     </Link>
       
    </div>
  )
}

export default Navbar
