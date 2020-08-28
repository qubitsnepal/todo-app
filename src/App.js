import React from "react";
import Styled from "styled-components";
import TodoForm from "./components/TodoForm";
import Button from "./components/Button";
// import logo from "./logo.svg";
// import "./App.css";
// import Button from "./components/Button";
// import Task from "./components/Task";
// import Tasklist from "./components/Tasklist";

function App() {
  return (
    <>
      <TodoForm />
    </>
  );
}

const Container = Styled.div`
margin: 80px 300px;
height: 500px;
width: 400px;
color: white;
background-color: turquoise;
`;

export default App;
