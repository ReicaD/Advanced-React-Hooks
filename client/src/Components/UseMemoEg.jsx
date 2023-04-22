import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoEg() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  //adding an inExpensive function to run the sqrt of number on state by usng a for loop
  //const sqrt = getSqrt(number);
  //this will return the memorised value of the function
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);
  useEffect(() => {
    renders.current = renders.current + 1;
  });
  //setting the increment the incValue by 1 of a previous state
  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="from-control w-25"
      />
      <h2 className="my-3">
        {" "}
        the sqrt of {number}is {sqrt}
      </h2>
      <button className="btn btn-success">Re Render</button>
      <h3>Renders:{renders.current}</h3>
    </div>
  );
}

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }
  console.log("Expensive function called!");
  return Math.sqrt(n);
}

export default UseMemoEg;
