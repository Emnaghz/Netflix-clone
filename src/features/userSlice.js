import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from the state.
// For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = state => state.user.user;

export default userSlice.reducer;
