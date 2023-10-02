import React from "react";
import "./moon.css";
import moonpic from "./assets/moon (1) 2.png";

const lightmode = () => {
  return (
    <div>
      <div className="colourmode">
        <img src={moonpic} alt="moon" className="moon"></img>
      </div>
    </div>
  );
};

export default lightmode;
