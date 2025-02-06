import React from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from '../../interface/user'
import axios from 'axios'

const Register = () => {
    const {register,handleSubmit} = useForm<IUser>()
    const onsubmit = async (user:IUser)=>{
        try {
            const {data} = await axios.post(`http://localhost:3000/register`,user)
            alert('Đăng ký thành công')
        } catch (error:any) {
            // console.log(error);   
            if (error.response){
                alert(error.response.data)
            }        
        }
    }
  return (
    <div className='max-w-3xl mx-auto py-4'>
        <h1 className='text-red-700 text-center font-bold text-[24px]'>Đăng ký tài khoản</h1>
        <form onSubmit={handleSubmit(onsubmit)} className='flex p-4 flex-col gap-2 [&_input]:border [&_input]:px-4 [&_input]:py-1'>
            <input {...register('name')} type='text' placeholder='Họ tên'/>
            <input {...register('email')} type='text' placeholder='Email'/>
            <input {...register('password')} type='text' placeholder='Mật khẩu'/>
            <div className='flex justify-center'>
            <button className='bg-green-900 text-white px-4 py-2'>Đăng ký tài khoản</button>
            </div>
        </form>
    </div>
  )
}

export default Register