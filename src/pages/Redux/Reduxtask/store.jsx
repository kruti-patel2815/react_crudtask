import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import crudReducer from "./CounterSlicecrud";


export default configureStore({
    reducer: {
        counter: CounterSlice,
        crud: crudReducer,  
    }
})