import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import GlobalProvider from "./contexts/GlobalContext/GlobalProvider";
import SignInForm from "./components/SignInForm";

function App() {
  return (
    <>
      <GlobalProvider>
        {/* <TodoForm /> */}
        <SignInForm />
      </GlobalProvider>
    </>
  );
}

export default App;
