import React, { useState, useContext } from "react";
import styled from "styled-components";
import TaskList from "./TaskList";
import GlobalContext from "../contexts/GlobalContext/GlobalContext";

const TodoForm = () => {
  const { tasks, addTask, clearAll } = useContext(GlobalContext);
  const [inputList, setInputList] = useState("");

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const handleClick = (e) => {
    if (inputList.length > 0) {
      e.preventDefault();
      addTask(inputList);
      setInputList("");
    } else {
      alert("Error! Don't leave field blank");
    }
  };
  const handleClear = (e) => {
    e.preventDefault();
    clearAll();
  };

  return (
    <>
      <Container>
        <Head>ToDo App</Head>
        <Input
          type="text"
          placeholder="ADD YOUR ITEMS"
          onChange={itemEvent}
          value={inputList}
          required
        />
        <Button onClick={handleClick}>ADD ITEM</Button>
        <Button onClick={handleClear}>CLEAR ALL</Button>
        <Ul>
          {tasks.length > 0 ? (
            tasks.map((task) => <TaskList task={task} />)
          ) : (
            <div>No Tasks Added</div>
          )}
        </Ul>
      </Container>
    </>
  );
};
export default TodoForm;

const Container = styled.div`
  margin: 80px 400px;
  height: 842px;
  width: 943px;
  text-align: center;
  color: white;
  background-color: #353232;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid white;
  width: 25rem;
  background: transparent;
  margin-right: 4rem;
  color: white;
  font-size: 1.4rem;
  text-align: center;
  required: "required";
`;
const Button = styled.button`
  background-color: #a91f48;
  margin-right: 3rem;
  color: white;
  border-radius: 20px;
  height: 60px;
  border: none;
  width: 150px;
  font-size: 1.4rem;
`;
export const Ul = styled.ul`
  list-style: none;
  color: white;
  text-transform: capitalize;
  font-size: 2.5rem;
  margin-top: 5rem;
`;
const Head = styled.h1`
  font-size: 3.5rem;
  color: white;
  font-weight: 400;
  padding-bottom: 3rem;
  padding-top: 3rem;
`;
