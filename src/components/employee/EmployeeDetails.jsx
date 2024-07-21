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
import { promoteToVerifier } from "../../redux/reducer/userSlice";
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
    await dispatch(promoteToVerifier(id, toast));
    onClose();
  };

  const handleUpdatePassword = async () => {
    await dispatch(updatePassword(employee.id, password, setLoading, toast));
    setPassword("");
    setShowPasswordForm(false);
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
              label="Verified on"
              value={
                employee.verifiedDate
                  ? employee.verifiedDate
                  : "Not yet verified"
              }
            />
          </Grid>
          <Divider mt={6} mb={4} />
          {user.level === 1 && (
            <Box
              display="flex"
              flexDir={{ base: "column", md: "row" }}
              justifyContent="space-between"
              alignItems="center"
              gap={4}
              mb={4}
            >
              {employee.level === 3 && (
                <Button
                  variant="ghost"
                  rounded="full"
                  onClick={() => handlePromote(employee.id)}
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
                variant="ghost"
                rounded="full"
                onClick={() => setShowPasswordForm((prev) => !prev)}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Box as="span" color="brand.primary600">
                    <IoLockClosedOutline />
                  </Box>
                  <Text fontWeight={500}>Update Password</Text>
                </Box>
              </Button>
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
