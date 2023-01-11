import React from 'react'
import { Link } from 'react-router-dom'
import Highlights from '../highlights/highlights'
import Home from '../home/home'
import MenuIcon from '@mui/icons-material/Menu';
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Home from './components/home/home'
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  } 
}
function Navbar() {
  
  return (
    <div className='navbar' id="myTopnav">
     <Link to="/">

      <a className='home'>Home</a>
     </Link> 
     <Link to="/post">
      <a className='foot'>All About Football</a>
     </Link>
  
     <Link to="/highlights">
      <a className='news'>Highlights</a>
     </Link>
     <a  class="icon" onclick="myFunction()">
     <MenuIcon fontSize='large' color='tertiary'/>
  </a>
    </div>
  )
}

export default Navbar
