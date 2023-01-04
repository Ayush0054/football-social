import React, { useState } from 'react'
import NotesIcon from '@mui/icons-material/Notes';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import "./feed.css"
function Feed() {
  const [images,setImages] = useState([]);
  return (
    <div className="main-area">

    <div className='post'>
    <form action="">
    <div className="ip">
    <NotesIcon/>
     <textarea type="text" rows='5' cols="40"   />
    </div>
     <div className="ip2">
    <InsertPhotoIcon/> 
     <input className='photo'  type='file' multiple accept='image/*'  onChange={((e)=> setImages([...e.target.files]))}></input>
     <button type='submit' className='submit'>post</button>
     </div>
    </form>
    </div>

     
      
   </div>
  )
}

export default Feed
