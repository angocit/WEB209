import './App.css'
import { useRoutes } from 'react-router-dom';
import Home from './components/home';
import Detail from './components/detail';
import Productlist from './components/productlist';
import Client from './layout/client';
import Admin from './layout/Admin';
import Addproduct from './components/addproduct';
import Editproduct from './components/editproduct';
import CartContext from './context/cart';
import ProductContext from './context/product';

function App() {
  const router = useRoutes([
    {path:'',element:<CartContext><ProductContext><Client/></ProductContext></CartContext>,children:[
      {path:'',element:<Home/>},
      {path:'product-list',element:<Productlist/>},
      {path:'product/add',element:<Addproduct/>},
      {path:'product/edit/:id',element:<Editproduct/>},
      {path:'detail',Component:Detail}
    ]},
   
    {path:'dashboard',Component:Admin,children:
      [
        // {path:'product',Component:Productlist}
      ]
    }
  ])
  return router
}

export default App
