import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser } from './register'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const Login = () => {
  const {register,handleSubmit,formState:{errors}} = useForm<IUser>()
  const navigate = useNavigate()
  const onSubmit = async(registerdata:IUser)=>{
      try {
          const {data} = await axios.post('http://localhost:3000/login',registerdata)
          alert('Đăng nhập thành công')
          sessionStorage.setItem('user',JSON.stringify(data))
      } catch (error) {
          alert('Sai tên đăng nhập hoặc mật khẩu')
      }
  }
  return (
    <>
    <h1>Đăng ký tài khoản</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Email' {...register('email',{required:true,pattern:/^\S+@(\S+\.)+\S{2,6}$/})}/>
      {(errors.email) && <span>Sai định dạng email</span>}
      <input type='text' placeholder='Mật khẩu' {...register('password',{required:true,minLength:6})}/>
      {(errors.password) && <span>Mật khẩu lớn hơn 6 kí tự</span>}
      <button type='submit'>Đăng nhập</button>
    </form>
    </>
  )
}

export default Login