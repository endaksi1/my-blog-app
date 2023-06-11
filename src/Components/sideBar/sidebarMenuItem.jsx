import React from "react";

const SideBarMenuItem = ({ sideBarIcon, menuItem }) => {
  return (
    <div className="sidebar-menu-item-container">
      <div className="sidebar-menu-item-spacer small">{sideBarIcon}</div>
      <div className="sidebar-menu-item-spacer large">
        <h2 className="sidebar-menu-item">{menuItem}</h2>
      </div>
    </div>
  );
};

export default SideBarMenuItem;
