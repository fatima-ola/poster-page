import React from "react";

const Poster = (props) => {
  const { img, title, text } = props;
  return (
    <div className="wrapper">
      <div className="child-container">
        <img src={img} alt="react-logo" />
        <h2 className="title">{title}</h2>
        <p className="quote-text">{text}</p>
      </div>
    </div>
  );
};

export default Poster;
