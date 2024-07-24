import React, { useContext } from 'react'
import { AppCT } from '../context/AppContext'

const Login = () => {
    const {dispatch} = useContext(AppCT)
  return (
    <div className='fixed top-[30%] left-0 w-full h-full z-50'>
        <div className='bg-white border border-solid rounded p-6 max-w-[500px] mx-auto shadow-sm'>
            <h3 className='text-center text-[24px] uppercase font-bold'>Đăng nhập</h3>
            <form className='flex flex-col gap-4'>
                <input className='py-2 px-4 rounded border border-solid' type='text' placeholder='Email'/>
                <input className='py-2 px-4 rounded border border-solid' type='password' placeholder='Password'/>
                <div className='flex justify-center gap-6'>
                    <button className='py-2 px-4 rounded border border-solid'>Đăng ký</button>
                    <button onClick={()=>dispatch({type:'login',value:false})} className='py-2 px-4 rounded border border-solid'>Hủy</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login