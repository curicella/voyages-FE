import { createContext, useState } from "react";

export const MyContext = createContext({
  firstName: "",
  changeFirstName: (fn) => {},
});

export const MyContextProvider = (props) => {
  const [firstName, setFirstName] = useState("Ela");

  const changeFirstName = (fn) => {
    setFirstName(fn);
  };

  return (
    <MyContext.Provider value={{ firstName, changeFirstName }}>
      {props.children}
    </MyContext.Provider>
  );
};