import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import TaskList from "./TaskList";
import GlobalContext from "../contexts/GlobalContext/GlobalContext";

const TodoForm = () => {
  const {
    tasks,
    addTask,
    clearAll,
    foundItem,
    editTask,
    change,
    setChange,
    setFoundItem,
  } = useContext(GlobalContext);
  const [inputList, setInputList] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setInputList(event.target.value);
    setError(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (inputList.length > 0) {
      if (foundItem === null) {
        addTask(inputList);
        setInputList("");
      } else {
        editTask(inputList, foundItem.id);
        setInputList("");
        setChange(false);
        setFoundItem(null);
      }
    } else {
      setError(true);
    }
  };
  const handleClear = (e) => {
    e.preventDefault();
    clearAll();
  };
  useEffect(() => {
    if (foundItem !== null) {
      setInputList(foundItem.taskTitle);
    } else {
      setInputList("");
    }
  }, [foundItem]);

  return (
    <>
      <Container>
        <Head>TODO APP</Head>
        <Input
          type="text"
          placeholder="ADD YOUR ITEMS"
          onChange={handleChange}
          value={inputList}
        />
        <Span>{error ? "Input field cannot be left blank!!" : ""}</Span>
        <br></br>

        <Button onClick={handleClick}>{change ? "UPDATE" : "ADD ITEM"}</Button>
        <Button onClick={handleClear}>CLEAR ALL</Button>
        <Ul>
          {tasks.length > 0 ? (
            tasks.map((task) => <TaskList task={task} />)
          ) : (
            <NoTaskText>No Tasks Added!</NoTaskText>
          )}
        </Ul>
      </Container>
    </>
  );
};
export default TodoForm;

const Container = styled.div`
  height: 850px;
  width: 600px;
  text-align: center;
  color: white;
  background-color: #353232;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 10px;
`;
const Input = styled.input`
  width: 25rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;

  color: white;
  font-size: 1.4rem;
  text-align: center;

  margin-bottom: 3rem;
`;
const Button = styled.button`
  background-color: #a91f48;
  margin-right: 1.2rem;
  color: white;
  border-radius: 20px;
  height: 50px;
  border: none;
  width: 120px;
  font-size: 1.2rem;
`;
const Ul = styled.ul`
  list-style: none;
  color: white;
  text-transform: capitalize;
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-left: 0;
`;
const Head = styled.h1`
  font-size: 3.5rem;
  color: white;
  font-weight: 400;
  padding-bottom: 3rem;
  padding-top: 3rem;
`;
const Span = styled.span`
  position: absolute;
  color: red;
  font-weight: 500;

  left: 30%;
  top: 30%;
  font-size: 1.5rem;
  width: 400px;
`;
const NoTaskText = styled.div`
  position: absolute;
  top: 60%;
  left: 38%;
  font-size: 2rem;
`;
