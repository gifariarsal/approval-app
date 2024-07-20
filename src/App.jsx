import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, setUser } from "./redux/reducer/authSlice";
import {
  AdminPage,
  EmployeePage,
  LoginPage,
  RegisterPage,
  VerifierPage,
} from "./pages";

function App() {
  const dispatch = useDispatch();
  const { user, login } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const userFromStorage = JSON.parse(localStorage.getItem("user"));
      if (userFromStorage) {
        dispatch(setUser(userFromStorage));
        dispatch(loginSuccess());
      }
      setLoading(false);
    }
    fetchData();
  }, [dispatch]);

  if (loading) {
    return null;
  }

  return (
    <Routes>
      {!login && (
        <>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </>
      )}
      {login && user.level === 1 && (
        <Route path="/admin" element={<AdminPage />} />
      )}
      {login && user.level === 2 && (
        <Route path="/verifier" element={<VerifierPage />} />
      )}
      {login && user.level === 3 && (
        <Route path="/employee" element={<EmployeePage />} />
      )}
      <Route path="/*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
