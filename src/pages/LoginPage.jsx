import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducer/authSlice";
import AuthLayout from "../components/auth/AuthLayout";
import AuthForm from "../components/auth/AuthForm";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(login(email, password, setLoading, toast, navigate));
  };

  return (
    <AuthLayout title="Login">
      <AuthForm onAuth={onLogin} loading={loading} />
    </AuthLayout>
  );
};

export default LoginPage;
