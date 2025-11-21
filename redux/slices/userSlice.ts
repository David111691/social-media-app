import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  email: "",
  uid: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email,
        uid: action.payload.uid,
      };
    },
    signOutUser: (state) => {
      return {
        ...state,
        name: "",
        username: "",
        email: "",
        uid: "",
      };
    },
  },
});

export const { signInUser, signOutUser } = userSlice.actions;

export default userSlice.reducer;
