import React, { useContext } from "react";
import GlobalContext from "./GlobalContext";

const GlobalProvider = (props) => {
  const TaskContext = useContext(GlobalContext);
  return (
    <>
      <TaskContext.Provider value={{ name: "abcd" }}>
        {props.children}
      </TaskContext.Provider>
    </>
  );
};

export default GlobalProvider;
