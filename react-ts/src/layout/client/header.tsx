import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { countCT } from '../../context/countcontext'

type Props = {}

const Header = (props: Props) => {
  const count = useContext(countCT)
  return (
    <header className='bg-slate-500'>
        <div className='max-w-[1200px] mx-auto'>
            <nav>
              <ul className='flex gap-5'>
                <li>
                  <NavLink className='py-4 block text-white' to={'/'}>Trang chủ</NavLink>
                </li>
                <li>
                  <NavLink className='py-4 block text-white' to={'/products'}>Sản phẩm</NavLink>
                </li>
                <li>
                  <Link className='py-4 block text-white' to={'/'}>{count}</Link>
                </li>
              </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header