import React from "react";
import image from "../Assets/Images/pexels-sam-kolder-2387873.jpg";

const cardImage = image;

const BlogCard = () => {
  return (
    <div className="blog-card-container">
      <div className="card-header"></div>
      <div className="card-title-container">
        <h1 className="card-title">This is the title of the blog post.</h1>
      </div>
      <div className="card-image-container">
        <img className="card-image" src={cardImage} />
      </div>
      <div className="card-footer"></div>
    </div>
  );
};

export default BlogCard;
