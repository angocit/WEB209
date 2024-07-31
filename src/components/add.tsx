import React, { useContext } from 'react'
import { StudentCT } from '../studentcontext'
import { useForm } from 'react-hook-form'
import { FormStudent } from '../interface/students'

const AddStudent = () => {
  const {onAdd} = useContext(StudentCT)
  const {register,handleSubmit,formState:{errors}} = useForm<FormStudent>()
  const onSubmit = (studentdata:FormStudent)=>{
    onAdd(studentdata)
  }
  return (
    <>
    <h1>Thêm mới sinh viên</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Họ tên' {...register('name',{required:true,minLength:6})}/>
      {(errors.name) && <span>Tên không để trống và lớn hơn 6 kí tự</span>}
      <input type='number' placeholder='Tuổi' {...register('age',{pattern:/^\d*$/})}/>
      {(errors.age) && <span>Tuổi là số không âm</span>}
      <input type='text' placeholder='Email' {...register('email')}/>
      <input type='text' placeholder='Số điện thoại' {...register('phone')}/>
      <button type='submit'>Thêm mới</button>
    </form>
    </>
  )
}

export default AddStudent