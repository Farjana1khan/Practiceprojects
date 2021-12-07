import React, { useState, useEffect } from "react";

function useStateAnduseEffect() {
  const [count, setCount] = useState(0);
   const [count1, setCount1] = useState(50);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClick1 = () => {
    setCount1(count1 - 1);
  };

 useEffect(() => {
     
      console.log("Effect called on");
}, [count])

  return (
    <div className="container text-center my-4">
      <h1>useState And useEffect Function is used</h1>
      <h2>Count Up: {count} </h2>
      <button onClick={handleClick}>Click On</button>

      <h3 className="mt-5">Count Down: {count1}</h3>
      <button onClick={handleClick1}>Click On</button>
    </div>
  );
}

export default useStateAnduseEffect;
