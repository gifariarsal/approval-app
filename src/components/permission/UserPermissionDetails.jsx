import { Grid } from "@chakra-ui/react";
import React from "react";
import ModalDataComponent from "../common/ModalDataComponent";
import ModalComponent from "../common/ModalComponent";

const UserPermissionDetails = ({
  isOpen,
  onClose,
  date,
  subject,
  status,
  description,
}) => {
  return (
    <ModalComponent
      isOpen={isOpen}
      onClose={onClose}
      title="Permission Details"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={4}
        mb={6}
      >
        <ModalDataComponent label="Date" value={date} />
        <ModalDataComponent label="Status" value={status} />
      </Grid>
      <ModalDataComponent label="Subject" value={subject} />
      <ModalDataComponent
        label="Description"
        value={description}
        fontWeight="normal"
        my={3}
      />
    </ModalComponent>
  );
};

export default UserPermissionDetails;
