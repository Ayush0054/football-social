import React from 'react'
import "./sidebar.css"
import SportsIcon from '@mui/icons-material/Sports';
import tweets from './tweets';
function Sidebar() {
  
  return (
    <div className='sidebar'>
    {tweets.map((index) =>{
    return   <div  className="newss">
     <SportsIcon/>
     <h3 className='headline' key={index.id}>{index.text}</h3>
     <img src={index. media_url} key={index.id} className='image'  alt="" />
      </div>
    })
    }
    </div>
  )
}

export default Sidebar
