import UseLocalStorage from "../hook/UseLocalStorage";
//task is a key passed from our local storage state
function CustomHookLocal() {
  const [task, setTask] = UseLocalStorage("task", "");
  const [tasks, setTasks] = UseLocalStorage("tasks", []);
  const onSubmit = (e) => {
    e.preventDefault();

    //this task will be set to an array and set to local storage
    const taskObj = {
      task,
      complested: false,
      date: new Date().toLocaleDateString,
    };
    setTasks([...tasks,taskObj])
  };
  return (
    <form className="w-50">
      <div className="mb-3">
        <label className="form-label">
          <input
            className="form-control"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CustomHookLocal;
