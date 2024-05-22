import React from "react";
import {
  Box,
  Icon,
  VStack,
  HStack,
  Text,
  Divider,
  Collapse,
  ListItem,
  UnorderedList
} from "@chakra-ui/react";
import {
  FiHome,
  FiSettings,
  FiUsers,
  FiBook,
  FiChevronDown,
  FiChevronUp
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSubMenuOpen1, setSubMenuOpen1] = React.useState(false);
  const [isSubMenuOpen2, setSubMenuOpen2] = React.useState(false);

  const toggleSubMenu1 = () => {
    setSubMenuOpen1(!isSubMenuOpen1);
  };

  const toggleSubMenu2 = () => {
    setSubMenuOpen2(!isSubMenuOpen2);
  };

  return (
    <Box bg="gray.200" w="300px" h="100vh" ml="10" mt="30">
      <VStack spacing={4} p={4} align="start">
        <HStack>
          <Box
            border="1px solid #394E75"
            p={2}
            borderRadius="md"
            as={Link}
            to="/"
          >
            <Icon as={FiHome} boxSize={6} color="#394E75" />
          </Box>
          {/* Add link to the Home page */}
          <Text ml={2}>Home</Text>
        </HStack>
        <HStack onClick={toggleSubMenu1} cursor="pointer">
          <Box border="1px solid #394E75" p={2} borderRadius="md">
            <Icon as={FiUsers} boxSize={6} color="#394E75" />
          </Box>
          <Text ml={2}>Users</Text>
          {isSubMenuOpen1 ? (
            <Icon as={FiChevronUp} />
          ) : (
            <Icon as={FiChevronDown} />
          )}
        </HStack>
        <Collapse in={isSubMenuOpen1}>
          <UnorderedList ml={6}>
            <ListItem>Option 1</ListItem>
            <ListItem>Option 2</ListItem>
            <ListItem>Option 3</ListItem>
          </UnorderedList>
        </Collapse>
        <Divider />
        <HStack onClick={toggleSubMenu2} cursor="pointer">
          <Box border="1px solid #394E75" p={2} borderRadius="md">
            <Icon as={FiBook} boxSize={6} color="#394E75" />
          </Box>
          <Text ml={2}>Books</Text>
          {isSubMenuOpen2 ? (
            <Icon as={FiChevronUp} />
          ) : (
            <Icon as={FiChevronDown} />
          )}
        </HStack>
        <Collapse in={isSubMenuOpen2}>
          <UnorderedList ml={6}>
            <ListItem>Book 1</ListItem>
            <ListItem>Book 2</ListItem>
            <ListItem>Book 3</ListItem>
          </UnorderedList>
        </Collapse>
        <Divider />
        <HStack>
          <Box border="1px solid #394E75" p={2} borderRadius="md">
            <Icon as={FiSettings} boxSize={6} color="#394E75" />
          </Box>
          <Text ml={2}>Settings</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Sidebar;
