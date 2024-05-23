// CreateUserScreen.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../actions/userActions'; // Action creator for creating a user

const CreateUserScreen = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({ name, email }));
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUserScreen;
