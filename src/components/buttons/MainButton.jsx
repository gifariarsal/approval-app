import { Button } from '@chakra-ui/react';
import React from 'react';

const MainButton = (props) => {
  return (
    <Button
      type="submit"
      display="flex"
      justifyContent="center"
      w="100%"
      mt={6}
      rounded="lg"
      color="white"
      bgColor="brand.primary900"
      isLoading={props.loading}
      _hover={{ bgColor: 'brand.primary800' }}
      _active={{ bgColor: 'brand.primary700' }}
    >
      {props.content}
    </Button>
  );
};

export default MainButton;
