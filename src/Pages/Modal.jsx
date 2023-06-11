import React from "react";

const Modal = ({ open }) => {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <blockquote class="imgur-embed-pub" lang="en" data-id="a/tNRx6oJ">
          <a href="//imgur.com/a/tNRx6oJ">
            The largest and the most populated city on earth, Tokyo, Japan
          </a>
        </blockquote>
        <script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
      </div>
    </div>
  );
};

export default Modal;
