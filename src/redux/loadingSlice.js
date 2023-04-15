import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
   handleLoading: (state, action) => {
    state.isLoading = action;
   }
  },
});

export const { handleLoading } =
  loadingSlice.actions;
export default loadingSlice.reducer;
