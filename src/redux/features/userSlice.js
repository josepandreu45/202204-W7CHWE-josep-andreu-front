import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (user, action) => ({ ...action.payload }),
    register: (user) => ({ ...user }),
  },
});

export const { login: loginActionCreator, register: registerActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
