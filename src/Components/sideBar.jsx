import React from "react";
import { BsFire } from "react-icons/bs";
import SideBarMenuItem from "./sidebarMenuItem";
import { BsSearch } from "react-icons/bs";
import { TbArrowBigUp } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

const fireIcon = <BsFire className="sb-icons" />;
const searchIcon = <BsSearch className="sb-icons" />;
const upvoteIcon = <TbArrowBigUp className="sb-icons" />;
const discussionIcon = <BiCommentDetail className="sb-icons" />;
const bookmarkIcon = <BsBookmark className="sb-icons" />;
const eyeIcon = <AiOutlineEye className="sb-icons" />;
const settingsIcon = <FiSettings className="sb-icons" />;

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
          <SideBarMenuItem menuItem="Popular" sideBarIcon={fireIcon} />
          <SideBarMenuItem menuItem="Most Upvoted" sideBarIcon={upvoteIcon} />
          <SideBarMenuItem
            menuItem="Best Discussions"
            sideBarIcon={discussionIcon}
          />
          <SideBarMenuItem menuItem="search" sideBarIcon={searchIcon} />
        </div>
        <div className="manage-container">
          <h2>Manage</h2>
        </div>
        <div className="manage-menu">
          <SideBarMenuItem menuItem="Bookmarks" sideBarIcon={bookmarkIcon} />
          <SideBarMenuItem menuItem="Reading History" sideBarIcon={eyeIcon} />
          <SideBarMenuItem menuItem="Customize" sideBarIcon={settingsIcon} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
