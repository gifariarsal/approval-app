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

export const addPermission = (subject, description, setLoading, toast) => {
  return async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("access_token");
      const res = await axios.post(
        `${URL_API}/permittion`,
        {
          subject,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.status === true) {
        toast({
          title: "Permission Submitted",
          description: res?.data?.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        throw new Error(res?.data?.message || "An error occurred");
      }
    } catch (error) {
      toast({
        title: "Failed to sumbit permission",
        description: error?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
};

export const updatePermission = (
  id,
  subject,
  description,
  setLoading,
  toast
) => {
  return async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("access_token");
      const res = await axios.put(
        `${URL_API}/permittion/${id}`,
        {
          subject,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.status === true) {
        toast({
          title: "Permission Updated",
          description: res?.data?.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        throw new Error(res?.data?.message || "An error occurred");
      }
    } catch (error) {
      toast({
        title: "Failed to update permission",
        description: error?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
};

export const cancelPermission = (id, setLoading, toast) => {
  return async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("access_token");
      const res = await axios.post(
        `${URL_API}/cancel/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.status === true) {
        toast({
          title: "Permission Canceled",
          description: res?.data?.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        throw new Error(res?.data?.message || "An error occurred");
      }
    } catch (error) {
      toast({
        title: "Failed to cancel permission",
        description: error?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
};

export const deletePermission = (id, setLoading, toast) => {
  return async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("access_token");
      const res = await axios.delete(`${URL_API}/permittion/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.status === true) {
        toast({
          title: "Permission Deleted",
          description: res?.data?.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        throw new Error(res?.data?.message || "An error occurred");
      }
    } catch (error) {
      toast({
        title: "Failed to delete permission",
        description: error?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
};

export const getUserPermissions = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const token = localStorage.getItem("access_token");
      const res = await axios.get(`${URL_API}/permittion`, {
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

export const checkPermissionStatus = (id, setStatus) => {
  return async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.get(`${URL_API}/permittion/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.status === true) {
        const { status } = res.data.data;
        setStatus(status);
      } else {
        throw new Error(res.data.message || "An error occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const approvePermission = (
  verificatorId,
  userId,
  permittionId,
  comment,
  isAccepted,
  setLoading,
  toast
) => {
  return async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("access_token");
      const res = await axios.post(
        `${URL_API}/accept-permittion`,
        {
          verificatorId,
          userId,
          permittionId,
          comment,
          isAccepted,
        },
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
      } else {
        throw new Error(res?.data?.message || "An error occurred");
      }
    } catch (error) {
      toast({
        title: "Failed to approve permission",
        description: error?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
};

export const { setPermissions, setLoading } = permissionSlice.actions;

export default permissionSlice.reducer;
