import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      username: "user 1",
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    showUser: (state, action) => {
        console.log(state.users.username)
      return {...state.users.username = action.payload}
    },
  },
});

export default usersSlice.reducer;
export const { showUser } = usersSlice.actions;
