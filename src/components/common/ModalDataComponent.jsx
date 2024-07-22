import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ModalDataComponent = ({
  label,
  value,
  fontWeight = "bold",
  color = "brand.primary900",
  ...boxProps
}) => {
  return (
    <Box {...boxProps}>
      <Text fontSize={{ base: "xs", md: "sm" }} color="brand.primary600">
        {label}
      </Text>
      <Text
        fontSize={{ base: "sm", md: "md" }}
        fontWeight={fontWeight}
        color={color}
      >
        {value}
      </Text>
    </Box>
  );
};

export default ModalDataComponent;
