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

const PermittionDetails = ({
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
            Permittion Details
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box mb={4}>
            <Text fontSize={{ base: "xs", md: "sm" }} color="brand.primary600">
              Date
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} fontWeight={600}>
              {date}
            </Text>
          </Box>
          <Box mb={2}>
            <Text fontSize={{ base: "xs", md: "sm" }} color="brand.primary600">
              Name
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} fontWeight={600}>
              {userName}
            </Text>
          </Box>
          <Box mb={4}>
            <Text fontSize={{ base: "xs", md: "sm" }} color="brand.primary600">
              Subject
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} fontWeight={600}>
              {subject}
            </Text>
          </Box>
          <Box mb={4}>
            <Text fontSize={{ base: "xs", md: "sm" }} color="brand.primary600">
              Description
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>{description}</Text>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PermittionDetails;
