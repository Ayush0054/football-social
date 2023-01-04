import React, { useState } from 'react'
import "./post.css"
import Sidebar from './sidebar';
import Widgets from './widgets';
import Feed from './feed';
function Post() {
  return (
    <div className="mains">
     <Sidebar/>
     <Feed/>
     {/* <Feed/> */}
    <Widgets/>
    </div>
  )
}

export default Post
