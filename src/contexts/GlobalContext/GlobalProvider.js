import React, { useState, useEffect } from "react";
import GlobalContext from "./GlobalContext";
import uuid from "react-uuid";

const GlobalProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(initialState !== null ? initialState : []);
  const [foundItem, setFoundItem] = useState(null);
  const [change, setChange] = useState(false);
  const addTask = (taskTitle) => {
    setTasks([...tasks, { taskTitle, id: uuid() }]);
  };
  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [
    tasks,
  ]);
  const clearAll = () => {
    setTasks([]);
  };
  const deleteItem = (itemId) => {
    setTasks(tasks.filter((item) => item.id !== itemId));
  };
  const findItemById = (id) => {
    setFoundItem(tasks.find((item) => item.id === id));
    setChange(true);
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
          change,
          setChange,
          setFoundItem,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalProvider;
