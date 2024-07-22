import React, { useState } from "react";
import DashboardPage from "./DashboardPage";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import AddPermissionModal from "../permission/AddPermissionModal";
import ActionButton from "../buttons/ActionButton";
import { IoAddOutline } from "react-icons/io5";
import UserPermission from "../permission/UserPermission";

const UserPermissionDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [refresh, setRefresh] = useState(false);

  const handleSuccess = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <DashboardPage title="My Permission">
      <Box
        w="full"
        mt={4}
        display="flex"
        justifyContent="justify-between"
        alignItems="center"
      >
        <Box w="60%">
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold">
            Permission List
          </Text>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="end" w="40%">
          <ActionButton
            onClick={onOpen}
            icon={<IoAddOutline />}
            label="Add Permission"
            colorScheme="yellow"
          />
        </Box>
      </Box>
      <Box>
        <UserPermission refresh={refresh} />
      </Box>
      <AddPermissionModal
        isOpen={isOpen}
        onClose={onClose}
        onSuccess={handleSuccess}
      />
    </DashboardPage>
  );
};

export default UserPermissionDashboard;
