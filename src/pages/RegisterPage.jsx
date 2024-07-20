import React, { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthForm from "../components/auth/AuthForm";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/reducer/userSlice";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegisterUser = ({ name, email, password }) => {
    dispatch(registerUser(name, email, password, setLoading, toast, navigate));
  };

  return (
    <AuthLayout title="Register">
      <AuthForm onAuth={onRegisterUser} loading={loading} />
    </AuthLayout>
  );
};

export default RegisterPage;
