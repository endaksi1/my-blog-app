import React from "react";
import BlogCard from "./blogCard";
import blogContent from "./blogContent";

const AllBlogs = () => {
  return (
    <div className="cards-grid">
      {blogContent.map((cardInfo) => {
        return (<BlogCard title={cardInfo.header} readTime={cardInfo.readTime} image={cardInfo.image}/>)
      })}
    </div>
  );
};

export default AllBlogs;
