import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL_API = "https://catatan.sidak.co.id/api";

const initialState = {
  permittions: [],
  loading: false,
};

export const permittionSlice = createSlice({
  name: "permittionReducer",
  initialState,
  reducers: {
    setPermittions: (state, action) => {
      state.permittions = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const getPermittions = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const token = localStorage.getItem("access_token");
      const res = await axios.get(`${URL_API}/read-permittion`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const sortedPermittions = res.data.data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });

      dispatch(setPermittions(sortedPermittions));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const { setPermittions, setLoading } = permittionSlice.actions;

export default permittionSlice.reducer;
