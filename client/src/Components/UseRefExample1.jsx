import { useRef } from "react";
import React from "react";
//useRef returns an object of current
function UseRefExample1() {
  const inputRef = useRef();
  const paraRef=useRef()

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "We are One";
    inputRef.current.style.backgroundColour = "blue";
    paraRef.current.innerText = "alli";
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          {" "}
          Hello
        </p>
      </form>
    </div>
  );
}

export default UseRefExample1;
