import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import SidebarMenu from "./SidebarMenu";
import Navbar from "../common/Navbar";

const DashboardLayout = ({ menuItems, renderedPage }) => {
  return (
    <Box>
      <Navbar />
      <Box display="flex" flexDir={{ base: "column", md: "row" }}>
        <Box
          pos="fixed"
          bottom={{ base: 0, md: "auto" }}
          zIndex={10}
          w={{ base: "100%", md: "280px" }}
          bg="brand.primary900"
          color="brand.primary50"
          minH={{ md: "100vh" }}
          mt={{ base: "auto", md: "60px" }}
        >
          <Stack w="full" spacing="2" direction={{ base: "row", md: "column" }}>
            {menuItems.map(({ name, icon, onClick }) => (
              <SidebarMenu
                key={name}
                onClick={() => onClick()}
                icon={icon}
                name={name}
              />
            ))}
          </Stack>
        </Box>
        <Box w={"full"} ml={{ md: "280px" }} mt="60px">
          {renderedPage()}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
