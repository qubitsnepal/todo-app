import React from "react";

import TodoForm from "./components/TodoForm";

import GlobalProvider from "./contexts/GlobalContext/GlobalProvider";

function App() {
  return (
    <>
      <GlobalProvider>
        <TodoForm />
      </GlobalProvider>
    </>
  );
}

export default App;
