import { useState } from "react";
import Todo from "./Todo";

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true);
  //passed a conditional to display todd because the innitial state is true
  return (
    <div>
      {showTodo && <Todo />}
      <button
        className="btn btn-primary"
        onClick={() => setShowTodo(!showTodo)}
      >Toggle Todo</button>
    </div>
  );
}

export default UseRefExample3;
