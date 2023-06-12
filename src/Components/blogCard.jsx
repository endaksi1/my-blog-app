import React from "react";
import imagePoster from "../Assets/Images/Capture.PNG";
import AppButton from "./button";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { TbArrowBigUp } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
import { IoArrowRedoOutline } from "react-icons/io5";

import { HiEllipsisVertical } from "react-icons/hi2";


const boxArrow = <BsBoxArrowUpRight className="box-arrow" />;

const BlogCard = ({ title, readTime, image }) => {
  return (
    <div className="blog-card-container">
      <div className="inner-container">
        <div className="card-header">
          <img className="poster-image" src={imagePoster} alt="" />
          <div className="header-spacer"></div>
          <AppButton>Read Post {boxArrow}</AppButton>
          <HiEllipsisVertical className="ellipsis" />
        </div>
        <div className="card-title-container">
          <h1 className="card-title">{title}</h1>
        </div>
        <div className="read-time-contianer">
          <p className="read-time">{readTime}</p>
        </div>
        <div className="card-image-container">
          <img className="card-image" src={image} alt="" />
        </div>
        <div className="card-footer">
          <TbArrowBigUp className="up-arrow-icon" />
          <div className="footer-spacer"></div>
          <BiCommentDetail className="comment-icon" />
          <div className="footer-spacer"></div>
          <IoArrowRedoOutline className="curve-right-arrow-icon " />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
