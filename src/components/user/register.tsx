import React, { useContext } from 'react'
import { ActionCT } from '../../context/action'

const Register = () => {
    const {dispatch} = useContext(ActionCT)
  return (
    <div className='fixed top-[20%] left-0 w-full h-full'>
    <div id='register' className='box-user border border-solid p6'>
        <h3 className='text-[24px] text-center pb-4'>Đăng ký tài khoản</h3>
        <form className='flex flex-col gap-3'>
            <input type='text' className='border border-solid p-2' placeholder='Họ tên'/>
            <input type='text' className='border border-solid p-2' placeholder='email'/>
            <input type='password' className='border border-solid p-2' placeholder='password'/>
            <div className='flex gap-2 justify-between'>
            <button type='submit' className='border border-solid p-2'>Đăng ký</button>
            <button onClick={()=>dispatch({type:'register',payload:{value:false}})} type='button' className='border border-solid p-2'>Hủy</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Register