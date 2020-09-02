import React from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import SignUpForm from "./components/SignUpForm";

import GlobalProvider from "./contexts/GlobalContext/GlobalProvider";

function App() {
  return (
    <>
      <SignUpForm />
      <GlobalProvider>
        <TodoForm />
      </GlobalProvider>
    </>
  );
}

export default App;
