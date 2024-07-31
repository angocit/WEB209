import React from 'react';
import './App.css'
import { useRoutes } from 'react-router-dom';
import Students from './components/students';
import AddStudent from './components/add';
import EditStudent from './components/edit';
import Register from './components/register';
import Login from './components/login';
import PrivateRouter from './privaterouter';
function App() {
  const route = useRoutes([
    {path:'students',Component:Students},
    {path:'students/add',element:<PrivateRouter><AddStudent/></PrivateRouter>},
    {path:'students/edit/:id',element:<PrivateRouter><EditStudent/></PrivateRouter>},
    {path:'register',Component:Register},
    {path:'login',Component:Login},
  ])
  return route      
}

export default App
