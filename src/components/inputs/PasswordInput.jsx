import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import useTogglePassword from "../../hooks/useTooglePassword";

const PasswordInput = ({ password, setPassword }) => {
  const [show, handleTogglePassword] = useTogglePassword();

  return (
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
          onChange={(e) => setPassword(e.target.value)}
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
  );
};

export default PasswordInput;
