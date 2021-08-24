import React, { useState } from "react";

const HookCounter = () => {
  const [counter, setCounter] = useState(0);

  // handle button click event
  const handleClick = () => {
    setCounter(counter + 1);
  };

  // handle button click event to add 5 in counter
  const handleAddFiveClick = () => {
    for (let i = 0; i < 5; i++) {
      setCounter((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <b>Counter - Hook Component</b>
      <br />
      <br />
      <label>Counter: {counter}</label>
      <br />
      <br />
      <button onClick={handleClick}>Add +1</button>&nbsp;
      <button onClick={handleAddFiveClick}>Add +5</button>
    </div>
  );
};

export default HookCounter;
