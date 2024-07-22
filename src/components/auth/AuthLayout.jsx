import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Logo from "../../assets/logo.svg";

const AuthLayout = ({ title, children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      bg="base"
    >
      <Box
        bg="white"
        boxShadow="lg"
        rounded="2xl"
        w={{ base: "90vw", md: "60vw", lg: "40vw" }}
      >
        <Box mt={8} display="flex" flexDir="column" alignItems="center" gap={4}>
          <Image w={{ base: "150px", md: "200px" }} src={Logo} alt="logo" />
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            color="brand.main"
            fontWeight="bold"
          >
            {title}
          </Text>
        </Box>
        <Box w="full" spacing="4" p={8}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
