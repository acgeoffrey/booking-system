import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  currentUser: 'admin',
  isLoading: false,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Set Loading state to true
    setLoading(state) {
      state.isLoading = true;
    },

    // Adding new user and setting current user
    addUser(state, action) {
      if (!state.users.includes(action.payload)) {
        state.users.push(action.payload);
      }
      state.currentUser = action.payload;
      state.isLoading = false;
    },

    //logout
    logout(state) {
      state.currentUser = '';
    },
  },
});

export const { setLoading, addUser, logout } = userSlice.actions;

export default userSlice.reducer;
