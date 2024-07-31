import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export interface IUser {
    id?:number|string;
    name?:string;
    email:string;
    password:string
}
const Register = () => {
  const {register,handleSubmit,formState:{errors}} = useForm<IUser>()
  const navigate = useNavigate()
  const onSubmit = async(registerdata:IUser)=>{
      try {
          const {data} = await axios.post('http://localhost:3000/register',registerdata)
          alert('Đăng ký thành công')
          navigate('/login')
      } catch (error) {
          alert('Lỗi đăng ký')
      }
  }
  return (
    <>
    <h1>Đăng ký tài khoản</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Họ tên' {...register('name')}/>
      <input type='text' placeholder='Email' {...register('email',{required:true,pattern:/^\S+@(\S+\.)+\S{2,6}$/})}/>
      {(errors.email) && <span>Sai định dạng email</span>}
      <input type='text' placeholder='Mật khẩu' {...register('password',{required:true,minLength:6})}/>
      {(errors.password) && <span>Mật khẩu lớn hơn 6 kí tự</span>}
      <button type='submit'>Thêm mới</button>
    </form>
    </>
  )
}

export default Register