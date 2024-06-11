// src/components/ProtectedRoute.js
import React from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      isAuthenticated
        ? <Component {...props} />
        : <UnauthorizedMessage />
        
    )} />
  );
};
const UnauthorizedMessage = () => {
  return (
    <div>
      <h3>You are not authenticated!</h3>
      <p>Please log in to access this page.</p>
      {/* Add login button or link here */}
    </div>
  );
};

export default ProtectedRoute;
