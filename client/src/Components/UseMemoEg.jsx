import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoEg() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);
  useEffect(() => {
    renders.current = renders.current + 1;
  });
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="from-control w-25"
      />
      <h3>Renders:{renders.current}</h3>
    </div>
  );
}

export default UseMemoEg;
