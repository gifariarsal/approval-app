import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import MenuDashboard from "./MenuDashboard";

const DashboardLayout = ({ menuItems, renderedPage }) => {
  return (
    <Box>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Box
          pos="fixed"
          zIndex={10}
          w={{ base: "100%", md: "280px" }}
          bg="#0B162E"
          color="brand.primary50"
          minH={{ md: "100vh" }}
          mt="60px"
        >
          <Stack w="full" spacing="2" direction={{ base: "row", md: "column" }}>
            {menuItems.map(({ name, icon, onClick }) => (
              <MenuDashboard
                key={name}
                onClick={() => onClick()}
                icon={icon}
                name={name}
              />
            ))}
          </Stack>
        </Box>
        <Box w={"full"} ml={{ md: "280px" }} mt={{ base: "116px", md: "60px" }}>
          {renderedPage()}
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
