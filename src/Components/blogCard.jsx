import React from "react";
import imageMain from "../Assets/Images/pexels-sam-kolder-2387873.jpg";
import imagePoster from "../Assets/Images/Capture.PNG";
import AppButton from "./button";

const cardImage = imageMain;
const posterImage = imagePoster;

const BlogCard = () => {
  return (
    <div className="blog-card-container">
      <div className="inner-container">
        <div className="card-header">
          <img className="poster-image" src={imagePoster} />
          <div className="header-spacer"></div>
          <AppButton>Read Post</AppButton>
          <div className="ellipsis">&#8942;</div>
        </div>
        <div className="card-title-container">
          <h1 className="card-title">Is rock skiing the greastest pastime known to man?</h1>
        </div>
        <div className="read-time-contianer">
          <p className="read-time">10m read time</p>
        </div>
        <div className="card-image-container">
          <img className="card-image" src={cardImage} />
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
};

export default BlogCard;
