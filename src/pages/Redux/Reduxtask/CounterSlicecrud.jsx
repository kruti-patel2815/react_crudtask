import { createSlice } from "@reduxjs/toolkit";

export const CounterSlicecrud = createSlice({
  name: "crud",
  initialState: {
    list: [], 
  },
  reducers: {
    addRecord: (state, action) => {
      state.list.push(action.payload);
    },
    updateRecord: (state, action) => {
      const { index, newData } = action.payload;
      state.list[index] = newData;
    },
    deleteRecord: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});

export const { addRecord, updateRecord, deleteRecord } =  CounterSlicecrud.actions;
export default CounterSlicecrud.reducer;
