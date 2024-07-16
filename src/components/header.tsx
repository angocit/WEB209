import React from 'react'
import { Link, NavLink } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
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
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header