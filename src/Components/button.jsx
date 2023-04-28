import React from "react";

const AppButton = (props) => {
  return (
    <button
      className="App-button large"
      onClick={() => {
        console.log("test thing");
      }}
    >
      {props.children}
    </button>
  );
};

export default AppButton;
