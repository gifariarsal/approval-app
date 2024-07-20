import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import useInput from "../../hooks/useInput";
import useTogglePassword from "../../hooks/useTooglePassword";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import MainButton from "../buttons/MainButton";

const LoginForm = ({ onLogin, loading }) => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [show, handleTogglePassword] = useTogglePassword();

  return (
    <form>
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
      <MainButton
        content="Login"
        onClick={() => onLogin({ email, password })}
        loading={loading}
      />
    </form>
  );
};

export default LoginForm;
