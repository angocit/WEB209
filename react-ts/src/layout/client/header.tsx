import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { countCT } from '../../context/countcontext'
import { AppCT } from '../../context/AppContext'
import Login from '../../components/login'
import Register from '../../components/register'

type Props = {}

const Header = (props: Props) => {
  const count = useContext(countCT)
  const {appState,dispatch} = useContext(AppCT)
  return (
    <>
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
                <li>
                  <button onClick={()=>{dispatch({type:'register',value:true});dispatch({type:'login',value:false})}} className='py-4 block text-white'>Đăng ký</button>
                </li>
                <li>
                  <button onClick={()=>{dispatch({type:'login',value:true});dispatch({type:'register',value:false})}}  className='py-4 block text-white'>Đăng nhập</button>
                </li>
              </ul>
            </nav>
        </div>
    </header>
      {(appState.isLogin) && 
      <Login/>
      }
      {(appState.isRegister) && 
      <Register/>
      }
    </>
  )
}

export default Header