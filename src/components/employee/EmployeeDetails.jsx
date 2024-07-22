import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useToast,
  Grid,
  Box,
  Divider,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { promoteToVerifier, verifyUser } from "../../redux/reducer/userSlice";
import { updatePassword } from "../../redux/reducer/authSlice";
import { IoKeyOutline, IoLockClosedOutline } from "react-icons/io5";
import ModalDataComponent from "../common/ModalDataComponent";
import PasswordForm from "../auth/PasswordForm";
import ActionButton from "../buttons/ActionButton";

const EmployeeDetails = ({ isOpen, onClose, employee, user }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePromote = async (id) => {
    await dispatch(promoteToVerifier(id, setIsLoading, toast));
  };

  const handleUpdatePassword = async () => {
    await dispatch(updatePassword(employee.id, password, setLoading, toast));
    setPassword("");
    setShowPasswordForm(false);
  };

  const handleVerifyUser = async (id) => {
    await dispatch(verifyUser(id, setLoading, toast));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "md" }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Employee Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
            <ModalDataComponent label="Name" value={employee.name} />
            <ModalDataComponent label="Role" value={employee.role} />
            <ModalDataComponent label="Email" value={employee.email} />
            <ModalDataComponent
              label="Status"
              value={employee.isVerified ? "Verified" : "Not yet verified"}
              color={employee.isVerified ? "green.600" : "red.600"}
            />
          </Grid>
          <Divider mt={6} mb={4} />
          {user.level === 1 && (
            <Box
              w="full"
              display="flex"
              flexDir={{ base: "column", md: "row" }}
              justifyContent="space-between"
              alignItems="center"
              gap={4}
              mb={3}
            >
              {employee.level === 3 && (
                <ActionButton
                  isLoading={isLoading}
                  isDisabled={isLoading}
                  onClick={() => handlePromote(employee.id)}
                  icon={<IoKeyOutline />}
                  label="Promote to Verifier"
                />
              )}
              <ActionButton
                onClick={() => setShowPasswordForm((prev) => !prev)}
                icon={<IoLockClosedOutline />}
                label="Reset Password"
                colorScheme="yellow"
              />
            </Box>
          )}
          {user.level === 2 && (
            <Box mb={3}>
              <ActionButton
                isLoading={loading}
                isDisabled={employee.isVerified}
                onClick={() => handleVerifyUser(employee.id)}
                icon={<IoKeyOutline />}
                label="Verify User"
                colorScheme="yellow"
              />
            </Box>
          )}
          {showPasswordForm && (
            <Box mb={4}>
              <PasswordForm
                loading={loading}
                password={password}
                setPassword={setPassword}
                onSubmit={handleUpdatePassword}
              />
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EmployeeDetails;
