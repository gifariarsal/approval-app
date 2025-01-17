import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL_API = "https://catatan.sidak.co.id/api";

const initialState = {
  user: {
    id: null,
    name: "",
    email: "",
    level: null,
    isVerified: false,
  },
  login: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, name, email, level, isVerified } = action.payload;
      state.user = {
        id,
        name,
        email,
        level,
        isVerified,
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

export const login = (email, password, setLoading, toast, navigate) => {
  return async (dispatch) => {
    try {
      setLoading(true);
      const res = await axios.post(`${URL_API}/login`, { email, password });

      if (res.data.status === true) {
        const access_token = res.data.access_token;
        const { id, name, email, level, isVerified } = res.data.data;

        localStorage.setItem("access_token", access_token);
        localStorage.setItem(
          "user",
          JSON.stringify({ id, name, email, level, isVerified })
        );

        await dispatch(setUser({ id, name, email, level, isVerified }));
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

export const updatePassword = (id, password, setLoading, toast) => {
  return async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("access_token");
      const res = await axios.post(
        `${URL_API}/user-updatepass/${id}`,
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.status === true) {
        toast({
          title: "Success",
          description: res?.data?.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to update password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
};

export const { loginSuccess, logoutSuccess, setUser } = authSlice.actions;

export default authSlice.reducer;
