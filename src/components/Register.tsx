import React from 'react'
import { Iuser } from '../interface/type'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const Register = () => {
    const {register,handleSubmit} = useForm<Iuser>()
    const onSubmit = async (user:Iuser)=>{
        try {
            await axios.post("http://localhost:4000/register",user)
            alert("Đăng ký thành công")
        } catch (error:any) {
              alert(error.response.data)               
        }
    }
  return (
    <div>
            <h1>Đăng ký tài khoản</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1 [&_input]:border'>
                <input type='text' {...register("email")} placeholder='Email'/>
                <input type='text' {...register("password")} placeholder='Mật khẩu'/>
                <button>Đăng ký</button>
            </form>
    </div>
  )
}

export default Register