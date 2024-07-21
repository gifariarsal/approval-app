import React from "react";
import DashboardPage from "./DashboardPage";
import { Box, Text } from "@chakra-ui/react";

const VerifierDashboard = () => {
  return (
    <DashboardPage title="Add Verifier">
      <Box mt={4}>
        <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="semibold" color="brand.primary800">
          Add Verifier
        </Text>
      </Box>
    </DashboardPage>
  );
};

export default VerifierDashboard;
