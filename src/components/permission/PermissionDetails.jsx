import {
  Box,
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

const PermissionDetails = ({
  isOpen,
  onClose,
  date,
  userName,
  subject,
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
          <ModalDataComponent label="Date" value={date} />
          <ModalDataComponent label="Name" value={userName} my={2} />
          <ModalDataComponent label="Subject" value={subject} />
          <ModalDataComponent label="Description" value={description} my={6} fontWeight="normal" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PermissionDetails;
