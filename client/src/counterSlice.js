import { createSlice } from '@reduxjs/toolkit'
// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    userAdded: (state, action) => {
      state.user = action.payload;
    },

  },
});
export default slice.reducer
// Actions
const { userAdded } = slice.actions
export const addUser = ({ username }) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(userAdded({username}));
  } catch (e) {
    return console.error(e.message);
  }
}
