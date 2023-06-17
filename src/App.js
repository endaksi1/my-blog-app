import React from "react";
import "./App.css";

import FrontPage from "./Pages/frontPage";
import Modal from "./Pages/modal";

function App() {
  return (
    <div className="App">
      <div className="panel">
        <FrontPage />
        <Modal />
      </div>
    </div>
  );
}

export default App;
