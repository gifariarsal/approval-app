import { Box, Text } from "@chakra-ui/react";
import React from "react";

const DashboardPage = ({ title, children }) => {
  return (
    <Box
      w="full"
      p={{ base: 2, lg: 4 }}
      rounded={{ base: "lg", lg: "xl" }}
      minH={{ base: "calc(100vh - 120px)", md: "calc(100vh - 60px)" }}
      bg="base"
    >
      <Box
        bg="brand.primary50"
        rounded={{ base: "lg", lg: "xl" }}
        py={4}
        px={{ base: 3, lg: 6 }}
        minH={{
          base: "calc(100vh - 132px)",
          md: "calc(100vh - 80px)",
          lg: "calc(100vh - 92px)",
        }}
      >
        <Text fontSize={{ base: "2xl", lg: "3xl" }} fontWeight="semibold">
          {title}
        </Text>
        <Box mt={4} w="full" bg="brand.primary50">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
