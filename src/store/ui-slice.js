import { createSlice, current } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cardIsVisible: false,
  },
  reducers: {
    toggle(state) {
      console.log(current(state));
      state.cardIsVisible = !state.cardIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
