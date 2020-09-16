import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "../components/Task";
import { Task as TaskType } from "../types/Types";

interface InitialState{
  tasks:TaskType[]
  foundItem:TaskType | null | undefined
  change:boolean

}

const initialState: InitialState ={
  tasks: [],
  foundItem:null,
  change: false,
}


const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      const { payload } = action
      state.tasks = [...state.tasks, payload];
    },

    clearAll: (state) => {
      state.tasks = [];
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    findItemById: (state, action: PayloadAction<string>) => {
      state.foundItem = state.tasks.find((item) => item.id === action.payload);
      state.change = true;
    },
    updateTask: (state, action: PayloadAction<TaskType>) => {
      const { inputList, id } = action.payload;

      const newTasks = state.tasks.map((item) => {
        if (id === item.id) {
          return { inputList, id };
        } else {
          return item;
        }
      });

      state.tasks = newTasks;

      state.change = false;

      state.foundItem = null;
    },
  },
});

const { actions, reducer } = todoSlice;
console.log(actions);
export const {
  addTask,
  clearAll,
  deleteTask,
  findItemById,
  updateTask,
} = actions;


export default reducer;
