import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SidebarMenu = ({ onClick, icon, name }) => {
  return (
    <Box w="100%">
      <Link as="button" onClick={onClick}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-start" }}
          p={4}
          bg="brand.primary900"
          _hover={{ bg: "brand.primary800" }}
        >
          <Icon as={icon} w={6} h={6} />
          <Text
            display={{ base: "none", md: "block" }}
            fontSize={{ base: "lg", md: "18" }}
            fontWeight="bold"
            ml={2}
          >
            {name}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

export default SidebarMenu;
