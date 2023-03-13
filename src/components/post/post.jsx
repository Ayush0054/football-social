import React, { useState } from "react";
import "./post.css";
import Sidebar from "./sidebar/sidebar";
import Widgets from "./widgets/widgets";
import Feed from "./feed/feed";
function Post({ token }) {
  return (
    <div className="mains">
      <Sidebar />
      <Feed token={token} key={token.user.id} />

      <Widgets />
    </div>
  );
}

export default Post;
