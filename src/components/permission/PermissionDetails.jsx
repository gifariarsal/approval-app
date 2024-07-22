import React from "react";
import ModalDataComponent from "../common/ModalDataComponent";
import ModalComponent from "../common/ModalComponent";
import { Grid } from "@chakra-ui/react";

const PermissionDetails = ({
  isOpen,
  onClose,
  date,
  userName,
  subject,
  description,
  isApplied,
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
        <ModalDataComponent label="Name" value={userName} />
        <ModalDataComponent label="Date" value={date} />
      </Grid>
      <ModalDataComponent label="Subject" value={subject} />
      <ModalDataComponent
        label="Description"
        value={description}
        my={3}
        fontWeight="normal"
      />
    </ModalComponent>
  );
};

export default PermissionDetails;
