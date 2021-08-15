import React from "react";
import {
  Box,
  AspectRatio,
  Image,
  Text,
  Link,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Card() {
  //   const { product, summary, longLine } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={3} borderWidth={1} borderRadius={4}>
      <Stack>
        <AspectRatio ratio={3 / 4}>
          <Image
            onClick={() => onOpen()}
            borderRadius={4}
            src={
              "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
            }
            alt="Woman paying for a purchase"
            objectFit="cover"
          />
        </AspectRatio>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {"The Social Network"} ({"2010"})
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <AspectRatio ratio={3 / 4}>
                <Image
                  onClick={() => onOpen()}
                  borderRadius={4}
                  src={
                    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
                  }
                  alt="Woman paying for a purchase"
                  objectFit="cover"
                />
              </AspectRatio>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Link
          as={RouterLink}
          my={1}
          display="block"
          to="/tt1285016"
          textDecoration="none"
        >
          <Text fontWeight="bold" fontSize="lg" color="blue.200">
            {"The Social Network"} ({"2010"})
          </Text>
          <Text textTransform="capitalize">{"movie"}</Text>
        </Link>
      </Stack>
    </Box>
  );
}

export default Card;
