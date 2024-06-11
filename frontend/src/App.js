// src/App.js
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from "./screens/ProfileScreen";
import CreateUserScreen from "./screens/CreateUserScreen";
import DeleteUserScreen from "./screens/DeleteUserScreen";
import UserEditScreen from "./screens/UserEditScreen";
import UserListScreen from "./screens/UserListScreen";


const App = () => {
  return (

  <Router>
  <div>
    <Routes>
      <Route path="/"  element={<HomeScreen />}/>
      <Route path="/Home" element={<HomeScreen />} />
      <Route path="/register" element={<CreateUserScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/ProfileScreen" element={<ProfileScreen />} />
      <Route path="/DeleteUserScreen" element={<DeleteUserScreen />} />
      <Route path="/admin/userlist" element={<UserListScreen />} />
      <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
      <Route path="/userlist" element={<UserListScreen />} />    
    </Routes>
  </div>
</Router>
  )
}


export default App;
