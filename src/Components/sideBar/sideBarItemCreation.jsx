import React from "react";
import SideBarMenuItem from "./sidebarMenuItem";

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
    discIcon: fireIcon,
    discTitle: "Popular",
  },
  {
    discIcon: upvoteIcon,
    discTitle: "Most Upvoted",
  },
  {
    discIcon: discussionIcon,
    discTitle: "Best Discussions",
  },
  {
    discIcon: searchIcon,
    discTitle: "Search",
  },
];

const manageListItems = [
  {
    manageIcon: bookmarkIcon,
    manageTitle: "Bookmarks",
  },
  {
    manageIcon: eyeIcon,
    manageTitle: "Reading History",
  },
  {
    manageIcon: settingsIcon,
    manageTitle: "Customize",
  },
];

export const DiscoverList = () => {
  return (
    <div>
      {discoverListItems.map((sideBarItem) => {
        return (
          <SideBarMenuItem
            sideBarIcon={sideBarItem.discIcon}
            menuItem={sideBarItem.discTitle}
          />
        );
      })}
    </div>
  );
};

export const ManageList = () => {
  return (
    <div>
      {manageListItems.map((sideBarItem) => {
        return (
          <SideBarMenuItem
            sideBarIcon={sideBarItem.manageIcon}
            menuItem={sideBarItem.manageTitle}
          />
        );
      })}
    </div>
  );
};
