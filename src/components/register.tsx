import React from 'react'
import { useForm } from 'react-hook-form'
import { IUser } from '../interface/user'
import axios from 'axios'

type Props = {}

const Register = (props: Props) => {
    const {register,handleSubmit} = useForm<IUser>()
    const onSubmit = async (user:IUser)=>{
        try {
            const {data} = await axios.post("http://localhost:3000/register",user)
            alert("Đăng ký thành công")
        } catch (error) {
            alert("Đăng ký thất bại")
        }
    }
  return (
   <>
    <h1>Đăng ký tài khoản</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("email")}/>
        <input type='text' {...register("password")}/>
        <button>Đăng ký</button>
    </form>
   </>
  )
}

export default Register