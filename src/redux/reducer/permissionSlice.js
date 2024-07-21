import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL_API = "https://catatan.sidak.co.id/api";

const initialState = {
  permissions: [],
  loading: false,
};

export const permissionSlice = createSlice({
  name: "permissionReducer",
  initialState,
  reducers: {
    setPermissions: (state, action) => {
      state.permissions = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const getPermissions = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const token = localStorage.getItem("access_token");
      const res = await axios.get(`${URL_API}/read-permittion`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const sortedPermissions = res.data.data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });

      dispatch(setPermissions(sortedPermissions));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const { setPermissions, setLoading } = permissionSlice.actions;

export default permissionSlice.reducer;
