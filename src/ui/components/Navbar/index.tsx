import { Box, Container, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ColorModeSwitcher from "../ThemeSwitcher";

function Navbar() {
  return (
    <Box p={3} bg="rgba(0,0,0,0.1)" w="100%" zIndex={1000}>
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent={"space-between"}
      >
        <Heading as="h1" size="s" alignSelf="center">
          <Link as={RouterLink} to="/">
            MovieLib
          </Link>
        </Heading>
        <ColorModeSwitcher justifySelf="flex-end" border="1px" />
      </Container>
    </Box>
  );
}

export default Navbar;
