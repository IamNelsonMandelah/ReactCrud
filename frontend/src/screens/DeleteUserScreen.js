// DeleteUserConfirmation.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../actions/userActions'; // Action creator for deleting a user

const DeleteUserConfirmation = ({ user, onClose }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
    onClose(); // Close the modal or navigate away after deletion
  };

  return (
    <div>
      <h1>Delete User</h1>
      <p>Are you sure you want to delete {user.name}?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default DeleteUserConfirmation;
