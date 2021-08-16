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

interface Props {
  id: string;
  title: string;
  year: string;
  type: string;
  imageUrl: string;
}

function Card({ id, imageUrl, title, type, year }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={3} borderWidth={1} borderRadius={4}>
      <Stack>
        <AspectRatio ratio={3 / 4}>
          <Image
            onClick={() => onOpen()}
            borderRadius={4}
            src={imageUrl}
            alt={title}
            objectFit="cover"
          />
        </AspectRatio>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {title} ({year})
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <AspectRatio ratio={3 / 4}>
                <Image
                  onClick={() => onOpen()}
                  borderRadius={4}
                  src={imageUrl}
                  alt={title}
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
          to={`/${id}`}
          textDecoration="none"
        >
          <Text fontWeight="bold" fontSize="lg" color="blue.200">
            {title} ({year})
          </Text>
          <Text textTransform="capitalize">{type}</Text>
        </Link>
      </Stack>
    </Box>
  );
}

export default Card;
