import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    login: (users, action) => ({ ...action.payload }),
  },
});

export const { login: loginActionCreator } = usersSlice.actions;

export default usersSlice.reducer;
