import React, { useState } from "react";
import Tabhide from "./Tabhide";

const TabButton = () => {
  const [showTab, setShowTab] = useState(true);

  // handle click event of the toggle button
  const handleToggle = () => {
    setShowTab((preState) => !preState);
  };

  return (
    <div className="App">
      <div style={{ marginBottom: 10 }}>
        <a href="https://www.cluemediator.com" target="_blank">
          Clue Mediator
        </a>
      </div>
      <input
        type="button"
        value={`${showTab ? "Hide" : "Show"} Tabhide`}
        onClick={handleToggle}
      ></input>
      {Tabhide(showTab)}
    </div>
  );
};

export default TabButton;
