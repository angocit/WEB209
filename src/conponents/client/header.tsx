import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className=' bg-slate-900 text-white'>
        <div className='flex gap-4 max-w-screen-xl mx-auto'>
        <div className='logo'>
            <h1>LOGO</h1>
        </div>
        <nav>
            <ul className='flex gap-2 [&_a]:px-6 [&_a]:py-2 h-14 items-center'>
                <li>
                    <Link to={'/'}>Trang chủ</Link>
                </li>
                <li>
                    <Link to={'/detail'}>Chi tiết</Link>
                </li>
            </ul>
        </nav>
        </div>
    </header>
  )
}

export default Header