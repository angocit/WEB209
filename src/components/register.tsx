import React, { useContext } from 'react'
import { AppCT } from '../context/appContext'

const Register = () => {
    const {dispatch} = useContext(AppCT)
  return (
    <div className='bg fixed top-[30%] w-full h-full z-50'>
        <div className='box-user p-10 border border-solid'>
            <h3 className='text-center text-[24px]'>Đăng ký</h3>
            <form className='flex flex-col gap-4'>
            <input type='text' className='px-6 py-2 border border-solid rounded' placeholder='Họ tên'/>
                <input type='text' className='px-6 py-2 border border-solid rounded' placeholder='Email'/>
                <input type='password' className='px-6 py-2 border border-solid rounded' placeholder='Mật khẩu'/>
                <div className='flex justify-center gap-4'>
                    <button type='submit'>Đăng nhập</button>
                    <button onClick={()=>dispatch({type:'register',value:false})} type='button'>Hủy</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register