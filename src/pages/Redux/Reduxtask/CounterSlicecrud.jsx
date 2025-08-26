import { createSlice } from "@reduxjs/toolkit";

const CounterSlicecrud = createSlice({
  name: "crud",
  initialState: {
    list: [],
    editIndex: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.list = state.list.filter((_, i) => i !== action.payload);
    },
    setEditIndex: (state, action) => {
      state.editIndex = action.payload;
    },
    updateItem: (state, action) => {
      const { index, newData } = action.payload;
      if (state.list[index]) {
        state.list[index] = newData;
      }
      state.editIndex = null;
    },
  },
});

export const { addItem, deleteItem, setEditIndex, updateItem } = CounterSlicecrud.actions;
export default CounterSlicecrud.reducer;
