import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import SignUpForm from "./components/SignUpForm";
import GlobalProvider from "./contexts/GlobalContext/GlobalProvider";
import SignInForm from "./components/SignInForm";

function App() {
  return (
    <>
      <SignUpForm />
      <GlobalProvider>
        {/* <TodoForm /> */}
        <SignInForm />
      </GlobalProvider>
    </>
  );
}

export default App;
