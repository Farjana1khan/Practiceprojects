import React from "react";
//import tab from "./Tab";
const showtab = () => {
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
        value={`${showTab ? "Hide" : "Show"} Tab`}
        onClick={handleToggle}
      ></input>
      {tab(showTab)}
    </div>
  );
};

export default showtab;
