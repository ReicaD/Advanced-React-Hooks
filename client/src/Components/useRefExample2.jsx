import React from "react";
import { useState, useEffect, useRef } from "react";

function useRefExample2() {
  const [name, setName] = useState("");
  const renders = useRef(1);
  const prevName = useRef("");
  //setting previous State everytime the name change will store it to Prev name.current
  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <h1> Renders:{renders.current}</h1>
      <h2>prev Name State:{prevName.current} </h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  );
}

export default useRefExample2;
