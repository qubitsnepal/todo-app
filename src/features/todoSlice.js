import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name:"todo",
    initialState:{
      tasks:[],
    },
reducers:{
}
})


const {reducer}=todoSlice
export default reducer;