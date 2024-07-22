import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import MainButton from "../components/buttons/MainButton";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Box pos="relative" w="full" minH="100dvh" bg="base" p={4}>
      <Box
        maxW="800px"
        mx="auto"
        p={8}
        bg="brand.primary50"
        minH="calc(100dvh - 32px)"
        rounded="xl"
      >
        <Box
          w="full"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image src="/404.webp" alt="404" w={{ base: "300px", md: "40%" }} />
          <Text align="center">
            Oops! Looks like you&apos;re on a missing page
          </Text>
          <MainButton
            content="Go Back"
            onClick={() => navigate(-1)}
            width="300px"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default NotFoundPage;
