import { useState } from "react";
//by using a function//passing key value to check with local storage and initialValue of the state.//
function UseLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue()
  );
  //this sets the value and checks to see if it does exist in the local storage as a function
  const setValue = (value) => {
  //sets value to state
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
      //sets value to local storage
      setLocalStorageValue(value)
      localStorage.setItem(key,JSON.stringify(valueToStore))
  };
  return [localStorageValue, setValue];
}
//getting the Key,Value from the local storage
function getLocalStorageValue(key, initialValue) {
  const itemFormStorage = localStorage.getItem(key);
  return itemFormStorage ? itemFormStorage : initialValue;
}
export default UseLocalStorage;


//Note: in the browser everything that is passed in the form should be saved in the local storage