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

export const { setEmployees, setLoading } = userSlice.actions;

export default userSlice.reducer;
