import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTables = createAsyncThunk("table/fetchTables", async () => {
  try {
    const response = await fetch("http://localhost:3001/api/table");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  table: [],
  status: "idle",
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTables.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTables.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.table = action.payload;
      })
      .addCase(fetchTables.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


export default tableSlice.reducer;
