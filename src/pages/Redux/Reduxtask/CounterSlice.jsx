import {createSlice} from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name : "counter",
    initialState : {
        no : 0
    },
    reducers : {
        increment : (state,action)=>{
            state.no += Number(action.payload)
        },
        decrement : (state,action)=>{
            state.no -= Number(action.payload)
        },
    }
})

export const {increment,decrement} = CounterSlice.actions
export default CounterSlice.reducer

