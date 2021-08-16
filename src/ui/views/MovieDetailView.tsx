import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { getMovieDetail } from "core/stores/actions/movieActions";
import { IMovieState } from "core/stores/reducers/movieReducer";
import { RootState } from "core/stores/store";
import React from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { connect, ConnectedProps, MapStateToProps } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

const mapStateToProps: MapStateToProps<IMovieState, {}, RootState> = (
  state
) => ({ ...state.movie });

const mapDispatchToProps = {
  getMovieDetail,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MovieDetailView({
  data,
  isError,
  isLoading,
  getMovieDetail,
}: PropsFromRedux) {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getMovieDetail(id);
  }, [getMovieDetail, id]);

  if (isLoading) {
    return _buildSkeleton();
  }

  if (isError) {
    return <Redirect to="/404" />;
  }

  return (
    <Container maxW="container.xl">
      <Box py={3}>
        <Stack spacing={6} direction={{ base: "column", md: "row" }} pb={6}>
          <Image
            borderRadius={4}
            src={data?.Poster}
            maxWidth="256px"
            alt={data?.Title}
          />
          <Stack>
            <Heading>
              {data?.Title} ({data?.Year})
            </Heading>
            <HStack spacing={3}>
              <FaStar color="#f5c518" />
              <Text>{data?.imdbRating}/10</Text>
            </HStack>
            <Text textTransform="capitalize">
              {data?.Type}, {data?.Runtime}
            </Text>
            <HStack>
              {data?.Genre.split(", ").map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </HStack>
            <HStack>
              <Text fontWeight="bold">Director:</Text>
              <Text>{data?.Director}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Writer(s): </Text>
              <Text>{data?.Writer}</Text>
            </HStack>
            <HStack alignItems="start" textAlign="left">
              <Text fontWeight="bold">Stars: </Text>
              <Text>{data?.Actors}</Text>
            </HStack>
            <HStack alignItems="start" textAlign="left">
              <Text fontWeight="bold">Released: </Text>
              <Text>{data?.Released}</Text>
            </HStack>
            <HStack alignItems="start" textAlign="left">
              <Text fontWeight="bold">Language(s): </Text>
              <Text>{data?.Language}</Text>
            </HStack>
            <HStack alignItems="start" textAlign="left">
              <Text fontWeight="bold">Country: </Text>
              <Text>{data?.Country}</Text>
            </HStack>
            <HStack alignItems="start" textAlign="left">
              <Text fontWeight="bold">Production(s): </Text>
              <Text>{data?.Production}</Text>
            </HStack>
          </Stack>
        </Stack>
        <Divider />
        <Stack py={6}>
          <Text fontWeight="bold">Synopsis</Text>
          <Text>{data?.Plot}</Text>
        </Stack>
        <Divider />
        <Stack py={6} spacing={3}>
          <Text fontWeight="bold">Awards & Ratings</Text>
          <Text>{data?.Awards}</Text>
          <Stack spacing={3} direction={{ base: "column", md: "row" }}>
            {data?.Ratings.map((item) => (
              <Tag key={item.Source}>
                {item.Source}: {item.Value}
              </Tag>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Container>
  );

  function _buildSkeleton() {
    return (
      <Container maxW="container.xl">
        <Box py={3}>
          <Stack spacing={6} direction={{ base: "column", md: "row" }} pb={6}>
            <Skeleton height={{ base: 300, md: 360 }} />
            <Stack>
              <Skeleton height={78} />
              <Skeleton height={360} />
            </Stack>
          </Stack>
          <Divider />
          <Stack py={6}>
            <Skeleton height={200} />
          </Stack>
          <Divider />
          <Stack py={6} spacing={3}>
            <Skeleton height={144} />
          </Stack>
        </Box>
      </Container>
    );
  }
}

export default connector(MovieDetailView);
