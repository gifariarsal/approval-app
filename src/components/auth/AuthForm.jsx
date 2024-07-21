import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainButton from "../buttons/MainButton";
import TextInput from "../inputs/TextInput";
import PasswordInput from "../inputs/PasswordInput";
import AuthNavigationLink from "./AuthNavigationLink";

const AuthForm = ({ onAuth, loading }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleAuth = () => {
    if (location.pathname === "/register") {
      onAuth({ name, email, password });
    } else {
      onAuth({ email, password });
    }
  };

  const handleNavigate = () => {
    if (location.pathname === "/register") {
      navigate("/");
    } else {
      navigate("/register");
    }
  };

  useEffect(() => {
    if (location.pathname === "/register") {
      setIsFormValid(
        name.trim() !== "" && email.trim() !== "" && password.trim() !== ""
      );
    } else {
      setIsFormValid(email.trim() !== "" && password.trim() !== "");
    }
  }, [name, email, password, location.pathname]);

  return (
    <form>
      {location.pathname === "/register" && (
        <TextInput
          id="name"
          name="Name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={setName}
          isRequired
          spacing={{ mb: "4" }}
        />
      )}
      <TextInput
        id="email"
        name="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={setEmail}
        isRequired
      />
      <PasswordInput password={password} setPassword={setPassword} />
      <AuthNavigationLink
        pathname={location.pathname}
        handleNavigate={handleNavigate}
      />
      <MainButton
        content={location.pathname === "/register" ? "Register" : "Login"}
        onClick={handleAuth}
        loading={loading}
        disabled={!isFormValid}
      />
    </form>
  );
};

export default AuthForm;
