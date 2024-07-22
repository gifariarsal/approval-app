import React from "react";
import { Button, Box, Text } from "@chakra-ui/react";

const ActionButton = ({
  isLoading,
  isDisabled,
  onClick,
  icon,
  label,
  variant = "solid",
  colorScheme = "gray",
}) => (
  <Button
    w={{ base: "full", md: "auto" }}
    variant={variant}
    rounded="full"
    colorScheme={colorScheme}
    onClick={onClick}
    isLoading={isLoading}
    isDisabled={isDisabled}
  >
    <Box display="flex" alignItems="center" gap={2}>
      {icon}
      <Text fontWeight={500}>{label}</Text>
    </Box>
  </Button>
);

export default ActionButton;
