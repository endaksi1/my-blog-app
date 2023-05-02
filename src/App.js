import React from "react";
import "./App.css";
import AppButton from "./Components/button";
import BlogCard from "./Components/blogCard";

function App() {
  return (
    <div className="App">
      <div className="panel">
        <BlogCard>blog card</BlogCard>
      </div>
    </div>
  );
}

export default App;
