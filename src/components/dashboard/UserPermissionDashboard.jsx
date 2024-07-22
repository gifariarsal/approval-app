import React, { useEffect, useState } from "react";
import DashboardPage from "./DashboardPage";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import AddPermissionModal from "../permission/AddPermissionModal";
import ActionButton from "../buttons/ActionButton";
import { IoAddOutline } from "react-icons/io5";

const UserPermissionDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DashboardPage title="My Permission">
      <Box
        w="full"
        mt={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={20}
      >
        <Text
          whiteSpace="nowrap"
          fontSize={{ base: "xl", lg: "2xl" }}
          fontWeight="semibold"
        >
          Permission List
        </Text>
        <ActionButton
          onClick={onOpen}
          icon={<IoAddOutline />}
          label="Add Permission"
          colorScheme="yellow"
        />
      </Box>
      <AddPermissionModal isOpen={isOpen} onClose={onClose} />
    </DashboardPage>
  );
};

export default UserPermissionDashboard;
