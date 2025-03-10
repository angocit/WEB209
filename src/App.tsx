import React from 'react';
import './App.css'
import { Routes, useRoutes } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import DetailProduct from './components/detail';
function App() {
  const routes = useRoutes([
    {path:"register",element:<Register/>},
    {path:"login",element:<Login/>},
    {path:"product/:id",element:<DetailProduct/>}
  ]) 
  return routes     
}

export default App
