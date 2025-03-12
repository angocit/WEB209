import React from 'react';
import './App.css'
import { Routes, useRoutes } from 'react-router-dom';
import ClientLayout from './layouts/client';
import AdminLayout from './layouts/admin';
function App() {
  const routes = useRoutes([
      {path:"/",element:<ClientLayout/>},
      {path:"/dashboard",element:<AdminLayout/>}
  ]) 
  return routes     
}

export default App
