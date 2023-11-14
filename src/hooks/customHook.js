import React, { useState } from "react";

const useMyCustomHook = () => {
  const [counter, setCounter] = useState(0);

  const onIncrementCounter = () => {
    setCounter((oldValue) => oldValue + 1);
  };

  const onDecrementCounter = () => {
    setCounter((oldValue) => oldValue - 1);
  };

  return {
    counter,
    increment: onIncrementCounter,
    decrement: onDecrementCounter,
  };
};

export default useMyCustomHook;