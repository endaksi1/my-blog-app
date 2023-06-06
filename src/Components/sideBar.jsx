import React from "react";
import { BsFire } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-container">
        <div className="main-feed-container">
          <h2>Main Feed</h2>
        </div>
        <div className="discover-container">
          <h2>Discover</h2>
        </div>
        <div className="disc-menu">
          <div className="popular-container">
            <BsFire className="popular-fire-icon" />
            <h2 className="popular">Popular</h2>
          </div>
          <div className="most-upvoted">
            <h2>Most Upvoted</h2>
          </div>
          <div className="best-disc">
            <h2>Best Discussions</h2>
          </div>
          <div>
            <h2 className="search">Search</h2>
          </div>
        </div>
        <div className="manage-container">
          <h2>Manage</h2>
        </div>
        <div className="manage-menu">
          <div className="bookmarks">
            <h2>Bookmarks</h2>
          </div>
          <div className="read-history">
            <h2>Reading History</h2>
          </div>
          <div className="customize">
            <h2>Customize</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
