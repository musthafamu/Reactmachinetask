import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLinegraph = createAsyncThunk("lineGraph/fetchLinegraph", async () => {
  try {
    const response = await fetch("http://localhost:3001/api/graph");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  lineGraph: [],
  status: "idle",
};

export const lineGraphSlice = createSlice({
  name: "lineGraph",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLinegraph.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLinegraph.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lineGraph = action.payload; // Corrected from state.piechart to state.lineGraph
      })
      .addCase(fetchLinegraph.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default lineGraphSlice.reducer;
