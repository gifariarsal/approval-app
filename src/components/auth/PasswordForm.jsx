import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  FormHelperText,
} from "@chakra-ui/react";
import useTogglePassword from "../../hooks/useTooglePassword";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import MainButton from "../buttons/MainButton";

const PasswordForm = ({ loading, password, setPassword, onSubmit }) => {
  const [show, handleTogglePassword] = useTogglePassword();

  const isPasswordEmpty = password.trim() === "";
  const isPasswordTooShort = password.length < 8 && password.trim() !== "";

  return (
    <Box mt={4}>
      <FormControl isRequired mt="4">
        <FormLabel htmlFor="password">New Password</FormLabel>
        <InputGroup>
          <Input
            id="password"
            name="password"
            placeholder="Enter new password"
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
        {isPasswordTooShort && (
          <FormHelperText fontStyle="italic" color="red.500">
            Password must be at least 8 characters
          </FormHelperText>
        )}
      </FormControl>
      <MainButton
        content="Update Password"
        onClick={onSubmit}
        loading={loading}
        disabled={isPasswordEmpty || isPasswordTooShort}
      />
    </Box>
  );
};

export default PasswordForm;
