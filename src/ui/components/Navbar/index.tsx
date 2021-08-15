import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ColorModeSwitcher from "../ThemeSwitcher";

function Navbar() {
  return (
    <Flex
      justifyContent={"space-between"}
      p={3}
      bg="rgba(0,0,0,0.1)"
      w="100%"
      zIndex={1000}
    >
      <Heading as="h1" size="s" alignSelf="center">
        MovieLib
      </Heading>
      <ColorModeSwitcher justifySelf="flex-end" border="1px" />
    </Flex>
  );
}

export default Navbar;
