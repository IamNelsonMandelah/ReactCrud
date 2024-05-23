

// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import UserList from './components/UserList';
import LoginForm from './components/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import axios from 'axios';

const crudApp = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <CreateUser />
    </div>
  );
};

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const handleLogout = () => {
    setToken('');
    setSelectedUser(null); // Reset selected user on logout
    localStorage.removeItem('token');
  };

  const handleUserSubmit = (userData) => {
    console.log('User submitted:', userData);
    setSelectedUser(null); // Reset selected user after submission
    fetchUsers(); // Refresh the user list
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user._id !== userId)); // Update user list locally
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Router>
      <div>
        <h1>User Management</h1>
        <Switch>
          <ProtectedRoute path="/" exact component={UserList} isAuthenticated={token !== ''} users={users} onSelectUser={setSelectedUser} onDeleteUser={handleDeleteUser} />
          <ProtectedRoute path="/edit/:id" component={EditUser} isAuthenticated={token !== ''} userId={selectedUser ? selectedUser._id : null} onSubmit={handleUserSubmit} />
          <ProtectedRoute path="/login" component={() => <LoginForm onLogin={handleLogin} />} isAuthenticated={token === ''} />
          <Route path="/logout" render={() => { handleLogout(); return <Redirect to="/login" /> }} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
