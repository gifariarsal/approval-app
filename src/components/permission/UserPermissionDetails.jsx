import {
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ModalDataComponent from "../common/ModalDataComponent";

const UserPermissionDetails = ({
  isOpen,
  onClose,
  date,
  subject,
  status,
  description,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "md" }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize="xl" fontWeight={700}>
            Permission Details
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} mb={6}>
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UserPermissionDetails;
