import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import user from './counterSlice'
const reducer = combineReducers({
    user,
  // here we will be adding reducers
})
const store = configureStore({
  reducer,
})
export default store;