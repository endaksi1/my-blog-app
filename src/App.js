import React, { useState } from "react";
import BlogCard from "./Components/blogCard";
import "./App.css";

import FrontPage from "./Pages/frontPage";
import Modal from "./Pages/Modal";

function App() {
  return (
    <div className="App">
      <div className="panel">
        <FrontPage />
        <Modal open={openModal} />
      </div>
    </div>
  );
}

export default App;
