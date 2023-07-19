import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/UserSlices";
//import Style from './Style.css';

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
  },
});
