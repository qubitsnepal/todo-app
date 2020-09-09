import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name:"todo",
    initialState:{
      tasks:[],
      foundItem: null
    },
reducers:{
  addTask:(state,action)=>{
    const {payload} = action 
    state.tasks=[...state.tasks,{payload}]
  }
}
})


const {actions,reducer}=todoSlice
export const {addTask} = actions
export default reducer;