import React, { useEffect, useState } from "react";
import DashboardPage from "./DashboardPage";
import { Box, useToast } from "@chakra-ui/react";
import TextInput from "../inputs/TextInput";
import PasswordInput from "../inputs/PasswordInput";
import MainButton from "../buttons/MainButton";
import { useDispatch } from "react-redux";
import { addVerifier } from "../../redux/reducer/userSlice";

const VerifierDashboard = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      name.trim() !== "" && email.trim() !== "" && password.trim() !== ""
    );
  }, [name, email, password]);

  const handleAddVerifier = async () => {
    await dispatch(addVerifier(name, email, password, setLoading, toast));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <DashboardPage title="Add Verifier">
      <Box w={{ base: "100%", md: "50%" }} mt={4}>
        <form>
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
          <MainButton
            content="Add Verifier"
            onClick={handleAddVerifier}
            loading={loading}
            disabled={!isFormValid}
          />
        </form>
      </Box>
    </DashboardPage>
  );
};

export default VerifierDashboard;
