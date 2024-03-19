import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import Productlist from './components/productlist';
import Footer from './components/footer';
import IProduct from './interface/product';
import Templatedemo from './components/demo';
import { Route, Routes } from 'react-router-dom';
import Client from './layout/client';
import Dashboard from './layout/dashboard';
import Home from './layout/home';
import Details from './components/detail';
import Products from './components/admin/products';
function App() {  
  return (
    <Routes>
        <Route path='/' Component={Client}>
            <Route path='' Component={Home}/>
            <Route path='details/:id' Component={Details}/>
            <Route path='demo' Component={Templatedemo}/>
        </Route>
        <Route path='/dashboard' Component={Dashboard}>
            <Route path='product' Component={Products}/> 
        </Route>
    </Routes>
  );
}

export default App;
