import React, { useState, useEffect } from "react";

const HookExample = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = "Hook Counter: ${counter} - Clue Mediator";
  });

  return (
    <div>
      <div>
        <span>HookExample: </span>
      </div>
      <input
        type="button"
        value="counter++"
        onClick={() => setCounter((preCounter) => prevCounter + 1)}
      />
    </div>
  );
};
