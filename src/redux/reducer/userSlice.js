import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL_API = "https://catatan.sidak.co.id/api";

const initialState = {
  employee: [],
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = [...action.payload];
    },
  },
});

export const registerUser = (
  name,
  email,
  password,
  setLoading,
  toast,
  navigate
) => {
  return async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${URL_API}/register`, {
        name,
        email,
        password,
      });
      console.log(res);

      if (res.data.access_token) {
        toast({
          title: "Register Success",
          description: res?.data?.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      } else {
        throw new Error(
          res?.data?.message || "An error occurred while registering"
        );
      }
    } catch (error) {
      toast({
        title: "Register Failed",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
};

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
