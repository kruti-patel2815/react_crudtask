import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
    name:'cdmi',
    initialState : {
        no : 10,
        st : "Hello"
    },
    reducers : {
        incre : (state) => {
            state.no += 1
        },
        decre : (state) => {
            state.no -= 1
        },
    }
})

export default CounterSlice.reducer
export const {incre,decre} = CounterSlice.actions



