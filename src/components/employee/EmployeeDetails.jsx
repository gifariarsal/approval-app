import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
  Grid,
  Box,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { promoteToVerifier, verifyUser } from "../../redux/reducer/userSlice";
import { updatePassword } from "../../redux/reducer/authSlice";
import { IoKeyOutline, IoLockClosedOutline } from "react-icons/io5";
import ModalDataComponent from "../common/ModalDataComponent";
import PasswordForm from "../auth/PasswordForm";

const EmployeeDetails = ({ isOpen, onClose, employee, user }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePromote = async (id) => {
    await dispatch(promoteToVerifier(id, setLoading, toast));
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
              mb={4}
            >
              {employee.level === 3 && (
                <Button
                  w={{ base: "full", md: "auto" }}
                  variant="solid"
                  rounded="full"
                  onClick={() => handlePromote(employee.id)}
                  isLoading={loading}
                  isDisabled={loading}
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <Box as="span" color="brand.primary600">
                      <IoKeyOutline />
                    </Box>
                    <Text fontWeight={500}>Promote to Verifier</Text>
                  </Box>
                </Button>
              )}
              <Button
                w={{ base: "full", md: "auto" }}
                variant="solid"
                rounded="full"
                colorScheme="yellow"
                onClick={() => setShowPasswordForm((prev) => !prev)}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <IoLockClosedOutline />
                  <Text fontWeight={500}>Reset Password</Text>
                </Box>
              </Button>
            </Box>
          )}
          {user.level === 2 && (
            <Button
              mb={4}
              w={{ base: "full", md: "auto" }}
              variant="solid"
              colorScheme="yellow"
              rounded="full"
              isLoading={loading}
              isDisabled={employee.isVerified}
              onClick={() => handleVerifyUser(employee.id)}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <IoKeyOutline />
                <Text fontWeight={500}>Verify User</Text>
              </Box>
            </Button>
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
