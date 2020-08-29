import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import uuid from "react-uuid";

const GlobalProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const addTask = (taskTitle) => {
    setTasks([...tasks, { taskTitle, id: uuid() }]);
  };
  const clearAll = () => {
    setTasks([]);
  };
  const deleteItem = (itemId) => {
    setTasks(tasks.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <GlobalContext.Provider value={{ tasks, addTask, clearAll, deleteItem }}>
        {props.children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalProvider;
