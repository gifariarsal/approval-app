import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ModalDataComponent = ({
  label,
  value,
  fontWeight = "bold",
  ...boxProps
}) => {
  return (
    <Box {...boxProps}>
      <Text fontSize={{ base: "xs", md: "sm" }} color="brand.primary600">
        {label}
      </Text>
      <Text fontSize={{ base: "sm", md: "md" }} fontWeight={fontWeight}>
        {value}
      </Text>
    </Box>
  );
};

export default ModalDataComponent;
