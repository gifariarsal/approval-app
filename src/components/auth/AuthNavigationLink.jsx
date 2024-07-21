import React from "react";
import { Button, Text } from "@chakra-ui/react";

const AuthNavigationLink = ({ pathname, handleNavigate }) => {
  return (
    <Button variant="link" onClick={handleNavigate}>
      <Text
        mt={6}
        fontSize="sm"
        fontWeight={400}
        _hover={{ textDecoration: "underline" }}
      >
        {pathname === "/register"
          ? "Already have an account?"
          : "Don't have an account?"}
      </Text>
    </Button>
  );
};

export default AuthNavigationLink;
