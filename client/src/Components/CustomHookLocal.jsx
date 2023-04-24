import UseLocalStorage from "../hook/UseLocalStorage";
//task is a key passed from our local storage state
function CustomHookLocal() {
  const [task, setTask] = UseLocalStorage("task","");
  const [tasks, setTasks] = UseLocalStorage("tasks","");
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
    </form>
  );
}

export default CustomHookLocal;
