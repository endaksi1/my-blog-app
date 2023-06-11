import React from "react";
import AllBlogs from "../Components/allBlogs";
import TopBar from "../Components/topBar";
import SideBar from "../Components/sideBar/sideBar";

const FrontPage = () => {
  return (
    <div className="all-content-grid">
      <TopBar></TopBar>
      <SideBar></SideBar>
      <AllBlogs></AllBlogs>
    </div>
  );
};

export default FrontPage;
