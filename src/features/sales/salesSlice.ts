import { createSlice } from "@reduxjs/toolkit";

interface SalesState {
  sales: any[]; // Define proper type later
}

const initialState: SalesState = {
  sales: [],
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    setSales: (state, action) => {
      state.sales = action.payload;
    },
  },
});

export const { setSales } = salesSlice.actions;
export default salesSlice.reducer;
