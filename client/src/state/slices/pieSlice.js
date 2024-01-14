import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPiechart = createAsyncThunk("pie/fetchPiechart", async () => {
  try {
    const response = await fetch("http://localhost:3001/api/pie-chart");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  piechart: [],
  status: "idle",
};

export const pieSlice = createSlice({
  name: "pie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPiechart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPiechart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.piechart = action.payload; // Corrected from state.table to state.piechart
      })
      .addCase(fetchPiechart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default pieSlice.reducer;
