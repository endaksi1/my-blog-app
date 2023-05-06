import React from "react";
import "./App.css";
import AppButton from "./Components/button";
import BlogCard from "./Components/blogCard";
import AllBlogs from "./Components/allBlogs";

function App() {
  return (
    <div className="App">
      <div className="panel">
        <AllBlogs></AllBlogs>
      </div>
    </div>
  );
}

export default App;
