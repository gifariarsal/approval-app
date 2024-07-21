import { Box, Text } from "@chakra-ui/react";
import React from "react";

const DashboardPage = ({ title, children }) => {
  return (
    <Box
      w="full"
      p={{ base: 2, md: 4 }}
      rounded={{ base: "lg", md: "xl" }}
      minH={{ base: "calc(100vh - 120px)", md: "calc(100vh - 60px)" }}
      bg="base"
    >
      <Box
        bg="brand.primary50"
        rounded={{ base: "lg", md: "xl" }}
        py={4}
        px={{ base: 3, md: 6 }}
      >
        <Text fontSize={{ base: "2xl", lg: "3xl" }} fontWeight="semibold">
          {title}
        </Text>
        <Box
          mt={4}
          w="full"
          minH={{ base: "calc(100vh - 216px)", md: "calc(100vh - 186px)" }}
          bg="brand.primary50"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
