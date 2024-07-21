import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice";
import userReducer from "./reducer/userSlice";
import permissionReducer from "./reducer/permissionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    permission: permissionReducer,
  },
});
