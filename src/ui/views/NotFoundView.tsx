import { Box, Heading, Link, VStack } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

function NotFoundView() {
  return (
    <Box
      height="100vh"
      width="100%"
      position="fixed"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack>
        <Heading textAlign="center">404 | Page Not Found</Heading>
        <Link as={RouterLink} to="/" color="blue.200">
          Back to Home
        </Link>
      </VStack>
    </Box>
  );
}

export default NotFoundView;
