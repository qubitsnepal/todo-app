import { combineReducers, configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/todoSlice"

const rootReducer = combineReducers({
  todo: todoReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type ReduxState = ReturnType<typeof rootReducer>

export default store
