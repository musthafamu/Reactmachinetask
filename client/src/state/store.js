
import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./slices/tableSlice";
import pieReducer from "./slices/pieSlice"
import linegraphReducer from "./slices/graphSlice"
export const store = configureStore({
  
  reducer: {
    table: tableReducer,
    pie: pieReducer,
    linegraph:linegraphReducer
  
  },
});