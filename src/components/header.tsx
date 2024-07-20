import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartCT } from '../context/cart'

type Props = {}

const Header = (props: Props) => {
  const {cart} = useContext(CartCT)
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
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header