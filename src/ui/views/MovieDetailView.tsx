import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import NotFoundView from "./NotFoundView";

function MovieDetailView() {
  const { id } = useParams<{ id: string }>();
  if (id !== "tt1285016") {
    return <NotFoundView />;
  }
  return (
    <Container maxW="container.xl">
      <Box py={3}>
        <Stack spacing={6} direction={{ base: "column", md: "row" }} pb={6}>
          <Image
            borderRadius={4}
            src={
              "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
            }
            maxWidth="256px"
            alt="Woman paying for a purchase"
          />
          <Stack>
            <Heading>
              {"The Social Network"} ({"2010"})
            </Heading>
            <HStack spacing={3}>
              <FaStar color="#f5c518" />
              <Text>{"7.7"}/10</Text>
            </HStack>
            <Text textTransform="capitalize">movie, 120 min</Text>
            <HStack>
              {["Biography", "Drama"].map((item) => (
                <Tag>{item}</Tag>
              ))}
            </HStack>
            <HStack>
              <Text fontWeight="bold">Director:</Text>
              <Text>David Fincher</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Writer(s): </Text>
              <Text>Aaron Sorkin, Ben Mezrich</Text>
            </HStack>
            <HStack alignItems="start" textAlign="left">
              <Text fontWeight="bold">Stars: </Text>
              <Text>Jesse Eisenberg, Andrew Garfield, Justin Timberlake</Text>
            </HStack>
            <HStack alignItems="start" textAlign="left">
              <Text fontWeight="bold">Released: </Text>
              <Text>01 Oct 2010</Text>
            </HStack>
            <HStack alignItems="start" textAlign="left">
              <Text fontWeight="bold">Language(s): </Text>
              <Text>English, French</Text>
            </HStack>
            <HStack alignItems="start" textAlign="left">
              <Text fontWeight="bold">Country: </Text>
              <Text>United States</Text>
            </HStack>
            <HStack alignItems="start" textAlign="left">
              <Text fontWeight="bold">Production(s): </Text>
              <Text>
                Scott Rudin Productions, Trigger Street Productions, Michael De
                Luca
              </Text>
            </HStack>
          </Stack>
        </Stack>
        <Divider />
        <Stack py={6}>
          <Text fontWeight="bold">Synopsis</Text>
          <Text>
            On a fall night in 2003, Harvard undergrad and computer programming
            genius Mark Zuckerberg sits down at his computer and heatedly begins
            working on a new idea. In a fury of blogging and programming, what
            begins in his dorm room soon becomes a global social network and a
            revolution in communication. A mere six years and 500 million
            friends later, Mark Zuckerberg is the youngest billionaire in
            history... but for this entrepreneur, success leads to both personal
            and legal complications.
          </Text>
        </Stack>
        <Divider />
        <Stack py={6} spacing={3}>
          <Text fontWeight="bold">Awards & Ratings</Text>
          <Text>Won 3 Oscars. 172 wins & 186 nominations total</Text>
          <HStack>
            {["Internet Movie Database", "Rotten Tomatoes"].map((item) => (
              <Tag>
                {item}: {"7.7/10"}
              </Tag>
            ))}
          </HStack>
        </Stack>
      </Box>
    </Container>
  );
}

export default MovieDetailView;
