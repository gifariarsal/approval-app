import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL_API = "https://catatan.sidak.co.id/api";

const initialState = {
  employees: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const getEmployees = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const token = localStorage.getItem("access_token");
      const res = await axios.get(`${URL_API}/read-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.status === 200) {
        const filteredData = res.data.data.filter((user) => user.level !== 1);
        dispatch(setEmployees(filteredData));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const promoteToVerifier = (id, toast) => {
  return async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.put(
        `${URL_API}/promote-verificator`,
        { id },
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
        description: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
};

export const { setEmployees, setLoading } = userSlice.actions;

export default userSlice.reducer;
