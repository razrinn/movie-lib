import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { getMovies, fetchMoreMovies } from "core/stores/actions/moviesAction";
import { IMoviesState } from "core/stores/reducers/moviesReducer";
import { RootState } from "core/stores/store";
import React, { useState } from "react";
import { connect, ConnectedProps, MapStateToProps } from "react-redux";
import Autocomplete from "ui/components/Autocomplete";
import Card from "ui/components/Card";
import InfiniteScroll from "ui/components/InfiniteScroll";

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
  fetchMoreMovies,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function HomeView({
  data,
  total,
  isLoading,
  isFetchingMore,
  isError,
  getMovies,
  fetchMoreMovies,
}: PropsFromRedux) {
  const [query, setQuery] = useState({
    keyword: "",
    page: 1,
  });

  const isAllMoviesShown = data.length >= total;

  const onSubmitForm = (event: React.FormEvent<IForm>) => {
    event.preventDefault();

    const { value } = event.currentTarget.elements.keyword;

    setQuery((prev) => ({ ...prev, keyword: value }));

    if (value) {
      getMovies(value);
      return;
    }
  };

  const onEndOfPage = () => {
    const newPage = query.page + 1;
    fetchMoreMovies(query.keyword, newPage);

    setQuery((state) => ({ ...state, page: newPage }));
  };

  return (
    <Container maxW="container.xl" py={3}>
      <Heading pb={3}>Welcome MovieLib!</Heading>
      <Text pb={3}>Enter keyword to start searching your favorite movie.</Text>
      <form onSubmit={onSubmitForm}>
        <HStack spacing={3} pb={6}>
          <Autocomplete />
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
      {query.keyword ? (
        <Box>
          <Text pb={3}>
            Showing results for keyword <Text as="b">"{query.keyword}"</Text>
          </Text>
          {isLoading ? (
            _buildSkeleton()
          ) : (
            <Box>
              {!isError ? (
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
      <InfiniteScroll
        isLoading={isFetchingMore}
        onBottomHit={onEndOfPage}
        loadOnMount={false}
        hasMoreData={!isAllMoviesShown}
      >
        <SimpleGrid
          columns={{
            base: 2,
            md: 4,
            lg: 5,
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
      </InfiniteScroll>
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
