import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='bg-slate-500'>
        <div className='max-w-[1200px] mx-auto'>
            <nav>
              <ul className='flex gap-5'>
                <li>
                  <Link className='py-4 block text-white' to={'/'}>Trang chủ</Link>
                </li>
                <li>
                  <Link className='py-4 block text-white' to={'/'}>Sản phẩm</Link>
                </li>
                <li>
                  <Link className='py-4 block text-white' to={'/'}>Liên hệ</Link>
                </li>
              </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header