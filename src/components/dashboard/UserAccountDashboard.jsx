import React, { useState } from "react";
import DashboardPage from "./DashboardPage";
import { Box, Button, Grid, Text, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import ModalDataComponent from "../common/ModalDataComponent";
import dateFormatter from "../../utils/dateFormatter";
import getRole from "../../utils/getRole";
import { IoLockClosedOutline } from "react-icons/io5";
import PasswordForm from "../auth/PasswordForm";
import { updatePassword } from "../../redux/reducer/authSlice";

const UserAccountDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  console.log(user);

  const dispatch = useDispatch();
  const toast = useToast();

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdatePassword = async () => {
    await dispatch(updatePassword(user.id, password, setLoading, toast));
    setPassword("");
    setShowPasswordForm(false);
  };

  return (
    <DashboardPage title="Account Information">
      <Box w={{ base: "100%", md: "60%" }} mt={4}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <ModalDataComponent label="Name" value={user.name} />
          <ModalDataComponent label="Role" value={getRole(user.level)} />
          <ModalDataComponent label="Email" value={user.email} />
          <ModalDataComponent
            label="Status"
            value={user.isVerified ? "Verified" : "Not yet verified"}
          />
        </Grid>
        <Button
          mt={8}
          variant="solid"
          rounded="full"
          colorScheme="yellow"
          onClick={() => setShowPasswordForm((prev) => !prev)}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <IoLockClosedOutline />
            <Text fontWeight={500}>Update Password</Text>
          </Box>
        </Button>
        {showPasswordForm && (
          <Box w={{ base: "100%", md: "80%" }} mt={6}>
            <PasswordForm
              loading={loading}
              password={password}
              setPassword={setPassword}
              onSubmit={handleUpdatePassword}
            />
          </Box>
        )}
      </Box>
    </DashboardPage>
  );
};

export default UserAccountDashboard;
