import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL_API = "https://catatan.sidak.co.id/api";

const initialState = {
  user: {
    id: null,
    name: "",
    email: "",
    level: null,
  },
  login: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, name, email, level } = action.payload;
      state.user = {
        id,
        name,
        email,
        level,
      };
    },
    loginSuccess: (state) => {
      state.login = true;
    },
    logoutSuccess: (state) => {
      state.login = false;
      state.user = initialState.user;
    },
  },
});

export const login = (email, password, setLoading, toast, navigate) => {
  return async (dispatch) => {
    try {
      setLoading(true);
      const res = await axios.post(`${URL_API}/login`, { email, password });

      if (res.data.status === true) {
        const access_token = res.data.access_token;
        const { id, name, email, level } = res.data.data;

        localStorage.setItem("access_token", access_token);
        localStorage.setItem(
          "user",
          JSON.stringify({ id, name, email, level })
        );

        await dispatch(setUser({ id, name, email, level }));
        await dispatch(loginSuccess());

        if (level === 1) {
          navigate("/admin");
        } else if (level === 2) {
          navigate("/verifier");
        } else {
          navigate("/employee");
        }
        toast({
          title: "Login Success",
          description: res?.data?.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        throw new Error(res?.data?.message || "Login failed");
      }
    } catch (error) {
      toast({
        title: "Login Failed",
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

export const logout = (toast, navigate) => {
  return async (dispatch) => {
    try {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      dispatch(logoutSuccess());
      toast({
        title: "Logout Success",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const { loginSuccess, logoutSuccess, setUser } = authSlice.actions;

export default authSlice.reducer;
