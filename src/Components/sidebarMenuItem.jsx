import React from "react";
import { BsFire } from "react-icons/bs";

const SideBarMenuItem = (props) => {
  return (
    <div className="sidebar-menu-item-container">
      <div className="sidebar-menu-item-spacer small">{props.sideBarIcon}</div>
      <div className="sidebar-menu-item-spacer large">
        <h2 className="sidebar-menu-item">{props.menuItem}</h2>
      </div>
    </div>
  );
};

export default SideBarMenuItem;
