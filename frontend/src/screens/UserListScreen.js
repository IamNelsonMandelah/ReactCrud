// import {
//   Box,
//   Button,
//   Flex,
//   Heading,
//   Icon,
//   Table,
//   Tbody,
//   Td,
//   Th,
//   Thead,
//   Tr
// } from "@chakra-ui/react";
// UserListScreen.js
import React from 'react';
import { useSelector } from 'react-redux';

const UserListScreen = () => {
  const users = useSelector(state => state.users);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email} {/* Adjust fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListScreen;

