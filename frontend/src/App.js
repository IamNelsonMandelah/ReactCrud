

// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import LoginForm from './components/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <div>
        <h1>React CRUD App</h1>
        <Switch>
          <ProtectedRoute path="/" exact component={UserList} isAuthenticated={token !== ''} />
          <ProtectedRoute path="/edit/:id" component={UserForm} isAuthenticated={token !== ''} />
          <ProtectedRoute path="/login" component={() => <LoginForm onLogin={handleLogin} />} isAuthenticated={token === ''} />
          <Route path="/logout" render={() => { handleLogout(); return <Redirect to="/login" /> }} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

