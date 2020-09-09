import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import TodoForm from "./components/TodoForm";
import SignUpForm from "./components/SignUpForm";
import GlobalProvider from "./contexts/GlobalContext/GlobalProvider";
import SignInForm from "./components/SignInForm";
import store from "./store/store";
import Form from "./components/Form";

function App() {
  return (
    <>
    <Provider store={store}>
       <Form/>
    </Provider>
     
    </>
  );
}

export default App;
