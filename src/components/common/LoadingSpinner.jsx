import { Center, Spinner } from "@chakra-ui/react";
import React from "react";

const LoadingSpinner = () => {
  return (
    <Center>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="brand.primary500"
        color="brand.primary900"
        size={{ base: "md", md: "xl" }}
      />
    </Center>
  );
};

export default LoadingSpinner;
