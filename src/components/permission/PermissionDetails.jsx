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
      <Grid templateColumns="repeat(2, 1fr)" gap={4} mb={6}>
        <ModalDataComponent label="Name" value={userName} />
        <ModalDataComponent label="Date" value={date} />
        <ModalDataComponent label="Subject" value={subject} />
        <ModalDataComponent
          label="Status"
          value={isApplied ? "Approved" : "Waiting for Approval"}
          color={isApplied ? "green.600" : "orange.500"}
        />
      </Grid>
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
