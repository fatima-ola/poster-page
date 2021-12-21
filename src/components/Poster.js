import React from "react";

const Poster = (props) => {
  return (
    <div className="wrapper">
      <div className="child-container">
        <img src={props.img} alt="react-logo" />
        <h2 className="title">{props.title}</h2>
        <p className="quote-text">{props.text}</p>
      </div>
    </div>
  );
};

export default Poster;
