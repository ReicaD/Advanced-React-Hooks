import { useState } from "react";

function UseLocalStorage() {
  const [localStorageValue, setLocalStorageValue] = useState();
  const setValue = (value) => {
    console.log(value);
  };
  return [localStorageValue, setValue];
}

export default UseLocalStorage;
