import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo2.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" borderRadius={10}></Image>
      <Text
        fontSize="2xl"
        backgroundColor="#B794F4"
        borderRadius={10}
        padding={3}
      >
        {" "}
        JustIT Games Project
      </Text>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
export default NavBar;
