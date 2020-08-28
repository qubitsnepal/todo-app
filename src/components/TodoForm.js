import React, { useState } from "react";
import Styled from "styled-components";

const TodoForm = () => {
  const [inputList, setinputList] = useState();
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });

    setinputList("");
  };

  return (
    <>
      <Container>
        <h1>ToDo App</h1>
        <Input
          type="text"
          placeholder="ADD YOUR ITEMS"
          onChange={itemEvent}
          value={inputList}
        />
        <Button onClick={listOfItems}>ADD ITEM</Button>
        <Ul>
          {Items.map((itemval) => {
            return <li>{itemval} </li>;
          })}
        </Ul>
      </Container>
    </>
  );
};

const Container = Styled.div`
margin: 80px 400px;
height:500px;
width: 300px;
text-align:center;
color: white;
background-color:turquoise;
`;
const Input = Styled.input`
border: none;
border-bottom: 2px solid palevioletred;
width: 200px;
background: transparent;
`;
const Button = Styled.button`
background-color: black;
color: white;
border-radius: 20%;
height: 35px;
border: none;
width: 80px;
`;
const Ul = Styled.ul`
list-style:none;
color:red;
text-transform:capitalize;
`;

export default TodoForm;
