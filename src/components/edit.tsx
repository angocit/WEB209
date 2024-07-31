import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormStudent } from '../interface/students'
import { StudentCT } from '../studentcontext'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditStudent = () => {
  const {onUpdate} = useContext(StudentCT)
  const {register,handleSubmit,reset} = useForm<FormStudent>()
  const params = useParams()
  useEffect(()=>{
    (async ()=>{
        try {
          const {data} = await axios.get(`http://localhost:3000/students/${params.id}`)
          reset({
            name:data.name,
            email:data.email,
            age:data.age,
            phone:data.phone
          })
        } catch (error) {
          
        }
    })()
  },[])
  const onSubmit = (studentdata:FormStudent)=>{
    onUpdate(studentdata,params.id)
  }
  return (
    <>
    <h1>Cập nhật sinh viên</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Họ tên' {...register('name')}/>
      <input type='number' placeholder='Tuổi' {...register('age')}/>
      <input type='text' placeholder='Email' {...register('email')}/>
      <input type='text' placeholder='Số điện thoại' {...register('phone')}/>
      <button type='submit'>Cập nhật mới</button>
    </form>
    </>
  )
}

export default EditStudent