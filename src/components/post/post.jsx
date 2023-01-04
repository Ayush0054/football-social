import React, { useState } from 'react'
import "./post.css"
import Sidebar from './sidebar/sidebar';
import Widgets from './widgets/widgets';
import Feed from './feed/feed';
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
