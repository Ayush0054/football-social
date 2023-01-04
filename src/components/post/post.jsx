import React, { useState } from 'react'
import "./post.css"
import NotesIcon from '@mui/icons-material/Notes';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Sidebar from './sidebar';
import Widgets from './widgets';
function Post() {
  const [images,setImages] = useState([]);
  return (
    <div className="mains">
     <Sidebar/>
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
    <Widgets/>
    </div>
  )
}

export default Post
