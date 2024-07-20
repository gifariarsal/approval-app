import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import MainButton from "../components/buttons/MainButton";
import { login } from "../redux/reducer/authSlice";
import Logo from "../assets/react.svg";
import useInput from "../hooks/useInput";
import useTogglePassword from "../hooks/useTooglePassword";

const LoginPage = () => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [show, handleTogglePassword] = useTogglePassword();
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(login(email, password, setLoading, toast, navigate));
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
      bg={"#F1FAFF"}
    >
      <Box
        bg={"white"}
        boxShadow={"lg"}
        rounded={"2xl"}
        w={{ base: "80vw", md: "60vw", lg: "40vw" }}
      >
        <Box
          mt={8}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          gap={4}
        >
          <Image w={{ base: "150px", md: "200px" }} src={Logo} alt="logo" />
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            color={"brand.main"}
            fontWeight={"bold"}
          >
            Log In
          </Text>
        </Box>
        <Box w={"full"} spacing={"4"} p={8}>
          <form>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
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
                      <IoEyeOffOutline size="20px" />
                    ) : (
                      <IoEyeOutline size="20px" />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <MainButton content="Login" onClick={onLogin} loading={loading} />
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
