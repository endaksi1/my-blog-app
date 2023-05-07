import React from "react";
import imgLogo from "../Assets/Images/myBlogLogo.png";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div>
        <img className="top-bar-logo" src={imgLogo}></img>
      </div>
    </div>
  );
};

export default TopBar;
