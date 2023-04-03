import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.push(action.payload)
    },
  },
});

export const { addCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
