import React from "react";
import Poster from "././components/Poster";
import reactLogo from "././assests/logo512.png";

const App = () => {
  return (
    <Poster
      img={reactLogo}
      title="REACT"
      text="The best thing since jQuery, Probably."
    />
  );
};

export default App;
