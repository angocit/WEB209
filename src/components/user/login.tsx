import React from 'react'
import { IUser } from '../../interface/user'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { IProduct } from '../../interface/product'
import { createData } from '../../services/data'
import axios from 'axios'

const Login = () => {
    const {register,handleSubmit} = useForm<IUser>()
    const mutation = useMutation({
      mutationFn: async (data:IUser)=>{
          try {
              const {data:user} = await axios.post(`http://localhost:3000/login`,data)
                console.log(user);  
                localStorage.setItem("token",user.accessToken)   
                return user           
            } catch (error) {
            console.log(error);
            
          }
      },
      onSuccess: (data)=>{
        console.log(data);      
      }
    })
    const onSubmit = (userdata:IUser)=>{
      mutation.mutate(userdata)
    }
    return (
      <div className='w-full'>
        <h1>Thêm mới sản phẩm</h1>
        <form className='flex flex-col [&_input]:border gap-2' onSubmit={handleSubmit(onSubmit)}>
          <input type='text' {...register("email")}/>
          <input type='text' {...register("password")}/>
          <button>Đăng nhập</button>
        </form>
      </div>
    )
}

export default Login