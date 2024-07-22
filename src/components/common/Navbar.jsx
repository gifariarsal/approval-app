import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import { logout } from "../../redux/reducer/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    dispatch(logout(toast, navigate));
  };

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <header>
      <Flex
        pos="fixed"
        zIndex={100}
        w="full"
        bg="brand.primary50"
        boxShadow="md"
        minH="60px"
        align="center"
        display="flex"
        justifyContent="space-between"
        px={{ base: 4, md: 8 }}
      >
        <Image
          src="/logo.svg"
          alt="logo"
          h={isMobile ? "24px" : "32px"}
          _hover={{ filter: "brightness(150%)", transition: "300ms" }}
        />
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar
            name={user.name}
            src={user.avatar}
            size={{ base: "xs", md: "sm" }}
          />
          <Text
            color="brand.primary900"
            mr={{ base: 0, md: 2 }}
            fontSize={{ base: "sm", md: "md" }}
          >
            Hi, {user.name}
          </Text>
          <Button
            gap={2}
            p={isMobile ? 0 : 2}
            onClick={handleLogout}
            title="Logout"
            variant="ghost"
            rounded={isMobile ? "full" : "md"}
            colorScheme="red"
          >
            <IoLogOutOutline size={isMobile ? "20px" : "24px"} />
            {isMobile ? "" : "Logout"}
          </Button>
        </Box>
      </Flex>
    </header>
  );
};

export default Navbar;
