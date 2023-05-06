import React from "react";
import imageMain from "../Assets/Images/pexels-sam-kolder-2387873.jpg";
import imagePoster from "../Assets/Images/Capture.PNG";
import AppButton from "./button";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { TbArrowBigUp } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
import { IoArrowRedoOutline } from "react-icons/io5";

import { HiEllipsisVertical } from "react-icons/hi2";

const cardImage = imageMain;
const posterImage = imagePoster;
const boxArrow = <BsBoxArrowUpRight className="box-arrow" />;

const BlogCard = () => {
  return (
    <div className="blog-card-container">
      <div className="inner-container">
        <div className="card-header">
          <img className="poster-image" src={imagePoster} />
          <div className="header-spacer"></div>
          <AppButton>Read Post {boxArrow}</AppButton>
          <HiEllipsisVertical className="ellipsis" />
        </div>
        <div className="card-title-container">
          <h1 className="card-title">
            Is rock skiing the greastest pastime known to man? Yes! And here's
            why.
          </h1>
        </div>
        <div className="read-time-contianer">
          <p className="read-time">10m read time</p>
        </div>
        <div className="card-image-container">
          <img className="card-image" src={cardImage} />
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
