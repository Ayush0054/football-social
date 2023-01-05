import React, { useState } from 'react'
import NotesIcon from '@mui/icons-material/Notes';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import "./feed.css"
function Feed() {
  const [images,setImages] = useState([]);
  const [input , setInput] = React.useState("")
  const [posts,setPosts] = React.useState([])
  return (
    <div className="main-area">

    <div className='post'>
    <form action="">
    <div className="ip">
    <NotesIcon/>
     <textarea type="text" value={input} onChange={e =>setInput(e.target.value)} rows='5' cols="40"   />
    </div>
     <div className="ip2">
    <InsertPhotoIcon/> 
     <input className='photo'  type='file' multiple accept='image/*'   onChange={((e)=> setImages([...e.target.files]))}></input>
     <button type='submit' className='submit' onClick={setPosts} >post</button>
     </div>
    </form>
    </div>
    {/* user post */}
    <div className="main-content">
         <div className="image-text">
    <h3 className='para'> 
    messi messi  anakara messi anakara messi messi messi messi
    messi messi  anakara messi anakara messi messi messi messi
    messi messi  anakara messi anakara messi messi messi messi
    messi messi  anakara messi anakara messi messi messi messi
    </h3>
       <img className='content-image' src="https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6" alt="messi" />
         </div>
    
    </div>
     
   </div>
  )
}

export default Feed
