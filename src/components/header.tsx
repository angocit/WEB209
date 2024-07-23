import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartCT } from '../context/cart'
import { AppCT } from '../context/appContext'
import Login from './login'
import Register from './register'

type Props = {}

const Header = (props: Props) => {
  const {cart} = useContext(CartCT)
  const {AppState,dispatch} = useContext(AppCT)
  return (
    <>
      <header className='bg-slate-800 w-full'>
        <nav className='max-w-[1200px] mx-auto'>
          <ul className='flex gap-6'>
            <li>
              <NavLink className='text-white py-4 block' to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink className='text-white py-4 block' to={'/product-list'}>Sản phẩm</NavLink>
            </li>
            <li>
              <NavLink className='text-white py-4 block' to={'/product/add'}>Thêm mới sản phẩm</NavLink>
            </li>
            <li><a className='text-white py-4 block'>Giỏ hàng ({cart})</a></li>
            <li>
              <button onClick={()=>{dispatch({type:'register',value:true});dispatch({type:'login',value:false})}}>Đăng ký</button>
            </li>
            <li>
              <button onClick={()=>{dispatch({type:'login',value:true});dispatch({type:'register',value:false})}}>Đăng nhập</button>
            </li>
          </ul>
        </nav>
      </header>
      {       
       (AppState.isLogin) && <><Login/></>       
      }
      {
         (AppState.isRegister) && <><Register/></>
      }
    </>
  )
}

export default Header