import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  number: 0,
  count: 10,
};

const UserSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    editUser: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) return action.payload.newData;
        return user;
      });
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => {
        if (user.id !== action.payload) return user;
      });
    },
  },
});

export const { addUser, editUser, deleteUser } = UserSlice.actions;

export default UserSlice.reducer;
