import React from 'react'
import "./home.css"
// import { motion } from "framer-motion"

import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
function Home() {
  return (
    <div className='homes'>
    <div className="contents">
      <h1 className='landing'> <span className='foot-text'>Football</span> the game ,that <span className='unites'>unites</span> the world</h1>
    </div>
    <div className='football'>
      <button className='btn'>get started</button>
    </div>
    
    </div>
  )
}

export default Home


