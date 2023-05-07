import React from "react";
import AllBlogs from "./allBlogs";
import TopBar from "./topBar";
import SideBar from "./sideBar";

const AllContent = () => {
  return (
    <div className="all-content-grid">
      <TopBar></TopBar>
      <SideBar></SideBar>
      <AllBlogs></AllBlogs>
    </div>
  );
};

export default AllContent;
