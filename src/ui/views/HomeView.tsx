import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Card from "ui/components/Card";

function HomeView() {
  return (
    <Container maxW="container.xl" py={3}>
      <Heading pb={3}>Welcome MovieLib!</Heading>
      <Text pb={3}>Enter keyword to start searching your favorite movie.</Text>
      <HStack spacing={3} pb={6}>
        <Input placeholder="Example: Avengers Endgame" />
        <Button loadingText="Searching" colorScheme="blue" variant="outline">
          Search
        </Button>
      </HStack>
      {true ? (
        <Box>
          <Text pb={3}>
            Showing results for keyword <Text as="b">"{"test"}"</Text>
          </Text>
          {true ? (
            _buildResult()
          ) : (
            <Text>No movie found. Please try another keyword.</Text>
          )}
        </Box>
      ) : null}
    </Container>
  );

  function _buildResult() {
    return (
      <SimpleGrid
        columns={{
          sm: 2,
          md: 4,
          lg: 6,
        }}
        spacing={3}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Card key={item} />
        ))}
      </SimpleGrid>
    );
  }
}

export default HomeView;
