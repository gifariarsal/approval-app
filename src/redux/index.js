import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice";
import userReducer from "./reducer/userSlice";
import permittionReducer from "./reducer/permittionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    permittion: permittionReducer,
  },
});
