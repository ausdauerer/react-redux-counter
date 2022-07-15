import { createSlice } from "@reduxjs/toolkit";

const initialValues={
    count:0
};

export const counterSlice = createSlice({
    name:'counter',
    initialState:initialValues,
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count=0
        },
    }
});

export const {increment,decrement,reset} = counterSlice.actions;

export default counterSlice.reducer
