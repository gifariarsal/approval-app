import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, setUser } from "./redux/reducer/authSlice";

function App() {
  const dispatch = useDispatch();
  const { user, login } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const userFromStorage = JSON.parse(sessionStorage.getItem("user"));
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
      {!login && <Route path="/" element={<LoginPage />} />}
      {login && user.level === 1 && (
        <Route path="/admin" element={<h1>Admin Dashboard</h1>} />
      )}
      {login && user.level === 2 && (
        <Route path="/verifier" element={<h1>Verifier Dashboard</h1>} />
      )}
      {login && user.level === 3 && (
        <Route path="/employee" element={<h1>Employee Dashboard</h1>} />
      )}
      <Route path="/*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
