import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo2.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius={10}></Image>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
export default NavBar;
