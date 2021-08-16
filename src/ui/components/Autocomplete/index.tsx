import {
  Box,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import useDebounce from "core/hooks/useDebounce";
import { getSuggestions } from "core/stores/actions/suggestionAction";
import { IMoviesState } from "core/stores/reducers/moviesReducer";
import { RootState } from "core/stores/store";
import React, { useState } from "react";
import { useEffect } from "react";
import { connect, ConnectedProps, MapStateToProps } from "react-redux";
import { useHistory } from "react-router-dom";

const mapStateToProps: MapStateToProps<IMoviesState, {}, RootState> = (
  state
) => ({ ...state.suggestion });

const mapDispatchToProps = {
  getSuggestions,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Autocomplete({ data, getSuggestions }: PropsFromRedux) {
  const [keyword, setKeyword] = useState("");
  const debounceKeyword = useDebounce(keyword, 500);

  const initialFocusRef = React.useRef(null);
  const history = useHistory();

  const navigateToMovieDetail = (id: string) => {
    history.push(`/${id}`);
  };

  const onChangeKeyword = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setKeyword(event.currentTarget.value);
  };

  useEffect(() => {
    getSuggestions(debounceKeyword);
  }, [debounceKeyword, getSuggestions]);
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom-start"
      matchWidth
      closeOnEsc
    >
      <PopoverTrigger>
        <Input
          ref={initialFocusRef}
          autoComplete="off"
          name="keyword"
          onChange={onChangeKeyword}
          placeholder="Example: Avengers Endgame"
        />
      </PopoverTrigger>
      <PopoverContent maxHeight="120px" overflow="auto">
        <PopoverBody>
          {data.map((item) => (
            <Item
              key={item.imdbID}
              onClick={() => navigateToMovieDetail(item.imdbID)}
            >
              {item.Title}
            </Item>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

function Item({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: (item: any) => void;
}) {
  return (
    <Box
      py={1}
      _hover={{ backgroundColor: "gray.800", cursor: "pointer" }}
      onClick={onClick}
    >
      <Text>{children}</Text>
    </Box>
  );
}

export default connector(Autocomplete);
