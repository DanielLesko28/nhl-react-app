import {
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Button,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const AwardCard = ({ imgUrl, awardName, awardDescription, awardLink }) => {
  const truncatedDescription =
    awardDescription && awardDescription.length > 300
      ? awardDescription.substring(0, 300) + "..."
      : awardDescription;

  return (
    <Box>
      <Card maxW="sm">
        <CardBody>
          <Center>
            <Image
              src={imgUrl}
              alt={awardName}
              borderRadius="lg"
              maxW="200px"
            />
          </Center>
          <Stack mt="6" spacing="3">
            <Heading size="md">{awardName}</Heading>
            <Text>{truncatedDescription}</Text>
          </Stack>
        </CardBody>

        <CardFooter>
          <Box display="flex" justifyContent="center" w="100%">
            <Link to={`/awards/${awardLink}`}>
              <Button variant="solid" colorScheme="blue">
                More info
              </Button>
            </Link>
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default AwardCard;
