import React from "react";
import { DiscoverList, ManageList } from "./sideBarItemCreation";

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
          <DiscoverList />
        </div>
        <div className="manage-container">
          <h2>Manage</h2>
        </div>
        <div className="manage-menu">
          <ManageList />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
