import React, { useState, useCallback } from "react";

function UseCallBackEg() {
  const [tasks, setTasks] = useState([]);
  //this function will add new tasks everytime it runs
  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, "some Tasks"]);
  },[setTasks]);
  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
}
//react.memo will prevent the re-rendering of the component
const Button = React.memo(({ addTask }) => {
  console.log("button rendered");
  return (
    <button onClick={addTask} className="btn btn-success">
      Add Task
    </button>
  );
});
export default UseCallBackEg;
