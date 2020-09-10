import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
    foundItem: null,
    change: false,
  },
  reducers: {
    addTask: (state, action) => {
      const { payload } = action;
      state.tasks = [...state.tasks, payload];
    },

    clearAll: (state) => {
      state.tasks = [];
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    findItemById: (state, action) => {
      state.foundItem = state.tasks.find((item) => item.id === action.payload);
      state.change = true;
    },
    updateTask: (state, action) => {
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
