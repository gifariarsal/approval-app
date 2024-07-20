import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import useTogglePassword from "../../hooks/useTooglePassword";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import MainButton from "../buttons/MainButton";

const AuthForm = ({ onAuth, loading }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [show, handleTogglePassword] = useTogglePassword();

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

  return (
    <form>
      {location.pathname === "/register" && (
        <FormControl isRequired mb="4">
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            rounded="lg"
            value={name}
            onChange={onNameChange}
          />
        </FormControl>
      )}
      <FormControl isRequired>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          rounded="lg"
          value={email}
          onChange={onEmailChange}
        />
      </FormControl>
      <FormControl isRequired mt="4">
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            type={show ? "text" : "password"}
            rounded="lg"
            value={password}
            onChange={onPasswordChange}
          />
          <InputRightElement width="3.5rem">
            <Button
              h="1.75rem"
              size="sm"
              title="Show/Hide Password"
              onClick={handleTogglePassword}
            >
              {show ? (
                <IoEyeOffOutline size="1.25rem" />
              ) : (
                <IoEyeOutline size="1.25rem" />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button variant="link" onClick={handleNavigate}>
        <Text
          mt={6}
          fontSize="sm"
          fontWeight={400}
          _hover={{ textDecoration: "underline" }}
        >
          {location.pathname === "/register"
            ? "Already have an account?"
            : "Don't have an account?"}
        </Text>
      </Button>
      <MainButton
        content={location.pathname === "/register" ? "Register" : "Login"}
        onClick={handleAuth}
        loading={loading}
      />
    </form>
  );
};

export default AuthForm;
