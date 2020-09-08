import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const Store = configureStore({
  rootReducer,
});

export default Store;
