import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Iuser } from '../interface/type'

const Login = () => {
    const {register,handleSubmit} = useForm<Iuser>()
    const onSubmit = async (user:Iuser)=>{
        try {
            const {data} = await axios.post("http://localhost:4000/login",user)
            const token = data.accessToken
            localStorage.setItem("token",token)
            alert("Đăng nhập thành công")
        } catch (error:any) {
              alert(error.response.data)               
        }
    }
  return (
    <div>
            <h1>Đăng nhập tài khoản</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1 [&_input]:border'>
                <input type='text' {...register("email")} placeholder='Email'/>
                <input type='text' {...register("password")} placeholder='Mật khẩu'/>
                <button>Đăng nhập</button>
            </form>
    </div>
  )
}

export default Login