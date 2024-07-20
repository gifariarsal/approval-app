import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL_API = "https://catatan.sidak.co.id/api";

const initialState = {
  employees: [],
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
  },
});

export const getEmployees = () => {
  return async (dispatch) => {
    try {
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
    }
  };
};

export const { setEmployees } = userSlice.actions;

export default userSlice.reducer;
