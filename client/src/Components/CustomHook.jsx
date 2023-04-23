import useFetch from "../hook/UseFetch";

function CustomHook() {
  const res = useFetch("https://jsonplaceholder.typicode.com/posts", {});
  console.log(res);
  return <div>UseFetch</div>;
}

export default CustomHook;
