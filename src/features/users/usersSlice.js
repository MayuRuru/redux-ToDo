import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Gina",
  },
  {
    id: "1",
    name: "Mungi",
  },
  {
    id: "2",
    name: "Puig",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
