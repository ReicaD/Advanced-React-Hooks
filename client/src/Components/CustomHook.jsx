import UseFetch from "../hook/UseFetch";

function CustomHook() {
  const { data, loading, error } = UseFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );
 console.log(data);
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.tittle}</h3>
      ))}
    </div>
  );
}

export default CustomHook;
