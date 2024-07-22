import React from 'react'
import { useForm } from 'react-hook-form'
import { ProductForm } from '../../../interface/product'
import { api } from '../../../config/axios'

type Props = {}

const AddProduct = (props: Props) => {
const {register,handleSubmit,reset,formState: { errors }} = useForm<ProductForm>()
const onSubmit =async (productdata:ProductForm)=>{
  try {
     const {data} = await api.post('/products',productdata)
     console.log(data);    
     reset() 
  } catch (error) {
    
  }
}
  return (
    <div className='p-4 border border-solid'>
        <h1 className='text-center text-xl'>Thêm mới sản phẩm</h1>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
            <label htmlFor='name'>Tên sản phẩm</label>
            <input {...register('name',{required:true})} type="text" id="name" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inse sm:text-sm sm:leading-6"/>
            {(errors?.name) &&
            <p className='text-red-700 text-[12px]'>Tên không để trống</p>
            }
            </div>
            <div className='form-group'>
            <label htmlFor='image'>Ảnh sản phẩm</label>
            <input {...register('image')} type="text" id="image" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inse sm:text-sm sm:leading-6"/>
            </div>
            <div className='form-group'>
            <label htmlFor='price'>Giá</label>
            <input {...register('price',{required:true,pattern:/\d$/i})} type="text" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inse sm:text-sm sm:leading-6"/>
            {(errors?.price) &&
            <p className='text-red-700 text-[12px]'>Giá phải là số</p>
            }
            </div>
            <div className='form-group'>
            <label htmlFor='description'>Mô tả</label>
            <input {...register('description')} type="text" id="description" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inse sm:text-sm sm:leading-6"/>
            </div>
            <div className='form-group'><button className='border border-solid rounded py-2 px-10 bg-slate-800 text-white' type='submit'>Thêm mới</button></div>
        </form>
    </div>
  )
}

export default AddProduct