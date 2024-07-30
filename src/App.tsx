import './App.css'
import Home from './components/home'
import Detail from './components/detail'
import Dashboard from './components/dashboard'
import Client from './layout/client'
import ProductList from './components/productlist'
import Addproduct from './components/addProduct'
import EditProduct from './components/editProduct'
import CartContext from './context/cart'
import ProductContext from './context/product'
import { useRoutes } from 'react-router-dom'
import ActionContext from './context/action'
import Search from './components/search'

function App() {
  const element = useRoutes([
    {path:'',element:<CartContext><ActionContext><Client/></ActionContext></CartContext>,children:[
        {path:'',element:<ProductContext><Home/></ProductContext>},
        {path:'detail',element:<Detail/>},
        {path:'search',element:<Search/>}
    ]},
    {path:'dashboard',element:<ProductContext><Dashboard/></ProductContext>,children:[
      {path:'product',element:<Home/>},
      {path:'product-list',element:<ProductList/>},
      {path:'product/add',element:<Addproduct/>},
      {path:'product/edit/:id',element:<EditProduct/>}
    ]},
  ])
  return element
}

export default App
