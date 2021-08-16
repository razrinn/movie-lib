import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useDebounce from "core/hooks/useDebounce";
import { getMovies } from "core/stores/actions/moviesActions";
import { IMoviesState } from "core/stores/reducers/moviesReducer";
import { RootState } from "core/stores/store";
import React, { useState } from "react";
import { connect, ConnectedProps, MapStateToProps } from "react-redux";
import Card from "ui/components/Card";

interface IFormElements extends HTMLFormControlsCollection {
  keyword: HTMLInputElement;
}

interface IForm extends HTMLFormElement {
  readonly elements: IFormElements;
}

const mapStateToProps: MapStateToProps<IMoviesState, {}, RootState> = (
  state
) => ({ ...state.movies });

const mapDispatchToProps = {
  getMovies,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function HomeView({ data, isLoading, getMovies }: PropsFromRedux) {
  const [keyword, setKeyword] = useState("");

  // const debounceKeyword = useDebounce(keyword, 500);

  const onSubmit = (event: React.FormEvent<IForm>) => {
    event.preventDefault();

    const { value } = event.currentTarget.elements.keyword;

    if (value) {
      getMovies(value);
      setKeyword(value);
      return;
    }

    if (keyword) {
      setKeyword(value);
    }
  };

  return (
    <Container maxW="container.xl" py={3}>
      <Heading pb={3}>Welcome MovieLib!</Heading>
      <Text pb={3}>Enter keyword to start searching your favorite movie.</Text>
      <form onSubmit={onSubmit}>
        <HStack spacing={3} pb={6}>
          <Input name="keyword" placeholder="Example: Avengers Endgame" />
          <Button
            type="submit"
            loadingText="Searching"
            colorScheme="blue"
            variant="outline"
          >
            Search
          </Button>
        </HStack>
      </form>
      {keyword ? (
        <Box>
          <Text pb={3}>
            Showing results for keyword <Text as="b">"{keyword}"</Text>
          </Text>
          {isLoading ? (
            _buildSkeleton()
          ) : (
            <Box>
              {true ? (
                _buildResult()
              ) : (
                <Text>No movie found. Please try another keyword.</Text>
              )}
            </Box>
          )}
        </Box>
      ) : null}
    </Container>
  );

  function _buildResult() {
    return (
      <SimpleGrid
        columns={{
          base: 2,
          md: 4,
          lg: 6,
        }}
        spacing={3}
      >
        {data.map((item) => (
          <Card
            key={item.imdbID}
            id={item.imdbID}
            title={item.Title}
            year={item.Year}
            type={item.Type}
            imageUrl={item.Poster}
          />
        ))}
      </SimpleGrid>
    );
  }

  function _buildSkeleton() {
    return (
      <SimpleGrid
        columns={{
          base: 2,
          md: 4,
          lg: 6,
        }}
        spacing={3}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Skeleton key={item} height={{ base: 300, md: 360 }} />
        ))}
      </SimpleGrid>
    );
  }
}

export default connector(HomeView);
