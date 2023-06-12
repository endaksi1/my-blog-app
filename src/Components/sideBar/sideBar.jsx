import React from "react";
import { SidebarSectionList } from "./sideBarItemCreation";

import { BsFire } from "react-icons/bs";
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

const discoverListItems = [
  {
    icon: fireIcon,
    title: "Popular",
  },
  {
    icon: upvoteIcon,
    title: "Most Upvoted",
  },
  {
    icon: discussionIcon,
    title: "Best Discussions",
  },
  {
    icon: searchIcon,
    title: "Search",
  },
];

const manageListItems = [
  {
    icon: bookmarkIcon,
    title: "Bookmarks",
  },
  {
    icon: eyeIcon,
    title: "Reading History",
  },
  {
    icon: settingsIcon,
    title: "Customize",
  },
];


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
          <SidebarSectionList data={discoverListItems} />
        </div>
        <div className="manage-container">
          <h2>Manage</h2>
        </div>
        <div className="manage-menu">
          <SidebarSectionList data={manageListItems} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
