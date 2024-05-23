// EditUserScreen.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../actions/userActions'; // Action creator for updating a user

const EditUserScreen = ({ user }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: user.id, name, email }));
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUserScreen;
