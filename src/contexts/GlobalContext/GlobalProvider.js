import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import uuid from "react-uuid";

const GlobalProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [foundItem, setFoundItem] = useState(null);
  const addTask = (taskTitle) => {
    setTasks([...tasks, { taskTitle, id: uuid() }]);
  };
  const clearAll = () => {
    setTasks([]);
  };
  const deleteItem = (itemId) => {
    setTasks(tasks.filter((item) => item.id !== itemId));
  };
  const findItemById = (id) => {
    setFoundItem(tasks.find((item) => item.id === id));
  };
  const editTask = (taskTitle, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { taskTitle, id } : task
    );
    setTasks(newTasks);
  };

  return (
    <>
      <GlobalContext.Provider
        value={{
          tasks,
          addTask,
          clearAll,
          deleteItem,
          findItemById,
          foundItem,
          editTask,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalProvider;
