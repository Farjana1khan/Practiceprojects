import React, { useState } from "react";

function UseState() {
  const [state, setState] = useState("farjana");
  const[roll, setRoll] = useState(8);

  const handleClick = () => {
    setState("khan");
    setRoll(9);
  };

  return (
    <>
      <div className="container text-center my-5">
        <h1>useState Hooks Function Example </h1>
        <h4>{state}</h4>
        <h4>{roll}</h4>

        <button onClick={handleClick}>Change</button>
      </div>
    </>
  );
}

export default UseState;
