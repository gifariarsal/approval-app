import { Center, Text } from "@chakra-ui/react";
import React from "react";

const NoDataFound = () => {
  return (
    <Center>
      <Text fontSize={{ base: "sm", md: "lg" }} color="brand.primary600">
        No data found
      </Text>
    </Center>
  );
};

export default NoDataFound;
