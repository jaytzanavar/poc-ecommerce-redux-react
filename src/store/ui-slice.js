import { createSlice, current } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cardIsVisible: false,
    notification: null,
  },
  reducers: {
    toggle(state) {
      // console.log(current(state));
      state.cardIsVisible = !state.cardIsVisible;
    },
    showNotification(state, action) {
      //  console.log("Action", action.payload);
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.msg,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
