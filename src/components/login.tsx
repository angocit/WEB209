import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from '../interface/user'

type Props = {}

const Login = (props: Props) => {
    const {register,handleSubmit} = useForm<IUser>()
    const onSubmit = async (user:IUser)=>{
        try {
            const {data} = await axios.post("http://localhost:3000/login",user)
            const token = data.accessToken
            localStorage.setItem("token",token)
            alert("Đăng nhập thành công")
        } catch (error:any) {
            alert(error.response.data)
        }
    }
  return (
   <>
    <h1>Đăng nhập tài khoản</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("email")}/>
        <input type='text' {...register("password")}/>
        <button>Đăng nhập</button>
    </form>
   </>
  )
}

export default Login