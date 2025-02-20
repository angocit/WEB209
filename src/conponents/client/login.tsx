import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from '../../interface/user'

export const Login = () => {
    const {register,handleSubmit} = useForm<IUser>()
    const onsubmit = async (user:IUser)=>{
        try {
            const {data} = await axios.post(`http://localhost:3000/login`,user)
            console.log(data);  
            localStorage.setItem("token",data.accessToken) 
            localStorage.setItem("user",JSON.stringify(data.user))        
            alert('Đăng nhập thành công')
        } catch (error:any) {
            // console.log(error);   
            if (error.response){
                alert(error.response.data)
            }        
        }
    }
  return (
    <div className='max-w-3xl mx-auto py-4'>
        <h1 className='text-red-700 text-center font-bold text-[24px]'>Đăng nhập</h1>
        <form onSubmit={handleSubmit(onsubmit)} className='flex p-4 flex-col gap-2 [&_input]:border [&_input]:px-4 [&_input]:py-1'>
            <input {...register('email')} type='text' placeholder='Email'/>
            <input {...register('password')} type='text' placeholder='Mật khẩu'/>
            <div className='flex justify-center'>
            <button className='bg-green-900 text-white px-4 py-2'>Đăng nhập</button>
            </div>
        </form>
    </div>
  )
}
