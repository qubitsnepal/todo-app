import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import TodoForm from "./components/TodoForm";
import store from "./store/store";


const App=()=> {
  return (
    <>
    <Provider store={store}>
      <TodoForm />
    </Provider>
     
    </>
  );
}

export default App;
