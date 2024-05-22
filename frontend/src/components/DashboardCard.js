import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Icon
} from "@chakra-ui/react";

// import { Link as RouterLink } from "react-router-dom";

const DashboardCard = ({ title, value, change, percentageChange, icon }) => {
  return (
    // <Link
    //   as={RouterLink}
    //   to={`/product/${product._id}`}
    //   _hover={{ textDecor: "none" }}
    // >
    <Box borderRadius="lg" bgColor="white" _hover={{ shadow: "md" }}>
      <Flex height="100%" alignItems="center" direction="column">
        <Box
          bg="blackAlpha.50"
          w="100%"
          p={4}
          color="blackAlpha.900"
          h={150}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="4xl"
          paddingBottom="50"
        >
          {icon}
        </Box>
        <Box
          bg="blackAlpha.50"
          w="100%"
          p={4}
          color="blackAlpha.900"
          h={300}
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingBottom="150"
          PaddingTop="200"
        >
          <StatGroup>
            <Stat>
              <StatLabel fontSize="4xl" paddingLeft="3">
                {title}
              </StatLabel>
              <StatNumber fontSize="3xl" textAlign="center">
                {value}{" "}
              </StatNumber>
              <StatHelpText fontSize="3xl">
                <StatArrow type={change} />
                {percentageChange}%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardCard;
