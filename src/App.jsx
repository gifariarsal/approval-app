import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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

  const UnauthorizedAccess = ({ level }) => {
    if (level === 1) {
      return <Navigate to="/admin" />;
    } else if (level === 2) {
      return <Navigate to="/verifier" />;
    } else if (level === 3) {
      return <Navigate to="/employee" />;
    }
    return <Navigate to="/" />;
  };

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
        <>
          <Route path="/admin" element={<AdminPage />} />
          <Route
            path="/*"
            element={<UnauthorizedAccess level={user.level} />}
          />
        </>
      )}

      {login && user.level === 2 && (
        <>
          <Route path="/verifier" element={<VerifierPage />} />
          <Route
            path="/*"
            element={<UnauthorizedAccess level={user.level} />}
          />
        </>
      )}

      {login && user.level === 3 && (
        <>
          <Route path="/employee" element={<EmployeePage />} />
          <Route
            path="/*"
            element={<UnauthorizedAccess level={user.level} />}
          />
        </>
      )}
    </Routes>
  );
}

export default App;
