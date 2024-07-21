import { Button } from "@chakra-ui/react";
import React from "react";

const MainButton = ({
  content,
  loading,
  disabled,
  onClick,
  width = "100%",
}) => {
  return (
    <Button
      type="submit"
      title={content}
      onClick={onClick}
      display="flex"
      justifyContent="center"
      w={width}
      mt={6}
      rounded="lg"
      color="brand.primary900"
      bgColor="brand.secondary900"
      isLoading={loading}
      isDisabled={disabled}
      _hover={{ bgColor: "brand.secondary800" }}
      _active={{ bgColor: "brand.secondary700" }}
    >
      {content}
    </Button>
  );
};

export default MainButton;
