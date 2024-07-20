import { Box, Text } from "@chakra-ui/react";
import React from "react";

const DashboardPage = ({ title }) => {
  return (
    <Box
      w="full"
      p={4}
      rounded={{ base: "lg", md: "xl" }}
      minH={{ md: "calc(100vh - 60px)" }}
      bg="base"
    >
      <Box
        bg="brand.primary50"
        rounded={{ base: "lg", md: "xl" }}
        py={4}
        px={6}
      >
        <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="semibold">
          {title}
        </Text>
        <Box mt={4} w="full" h="full" bg="brand.primary50">
          <Text>Dashboard</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
