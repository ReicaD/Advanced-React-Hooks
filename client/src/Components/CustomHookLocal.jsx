import UseLocalStorage from "../hook/UseLocalStorage";


function CustomHookLocal() {
  const [task, setTask] = UseLocalStorage("task","");
  return (
    <form className="w-25">
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
