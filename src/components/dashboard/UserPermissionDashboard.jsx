import React, { useState } from "react";
import DashboardPage from "./DashboardPage";
import { Box, IconButton, useDisclosure } from "@chakra-ui/react";
import AddPermissionModal from "../permission/AddPermissionModal";
import { IoAddOutline } from "react-icons/io5";
import UserPermission from "../permission/UserPermission";

const UserPermissionDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [refresh, setRefresh] = useState(false);

  const handleSuccess = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <DashboardPage title="My Permissions">
      <Box>
        <UserPermission refresh={refresh} />
      </Box>
      <AddPermissionModal
        isOpen={isOpen}
        onClose={onClose}
        onSuccess={handleSuccess}
      />
      <IconButton
        pos="fixed"
        title="Add Thread"
        bottom={{ base: 20, md: 10 }}
        right={{ base: 6, md: 10 }}
        onClick={onOpen}
        zIndex={10}
        icon={<IoAddOutline size={32} />}
        size="lg"
        rounded="full"
        colorScheme="yellow"
      />
    </DashboardPage>
  );
};

export default UserPermissionDashboard;
