import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IProduct } from '../../interface/product'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { createData } from '../../services/data'

const ProductAdd = () => {
  const [image,setImage] = useState<string>('')
  const {register,handleSubmit,reset} = useForm<IProduct>()
  const mutation = useMutation({
    mutationFn: async (data:IProduct)=>{
        try {
            const {data:product} = await createData<IProduct>({route:"products",data:data})
            return product
          } catch (error) {
          console.log(error);
          
        }
    },
    onSuccess: (data)=>{
      console.log(data);      
        alert("Thêm mới thành công")
    }
  })
  const onSubmit = (productData:IProduct)=>{
    mutation.mutate(productData)
  }
  const uploadImage =async (file:any)=>{
    console.log(file);  
    try {
      const formdata = new FormData()
      formdata.append("file",file[0]),
      formdata.append("upload_preset","reacttest")
        const {data} = await axios.post(`https://api.cloudinary.com/v1_1/dkpfaleot/image/upload`,formdata)
        // console.log(data);       
        reset({
          image: data.url
        }) 
        setImage(data.url)
      } catch (error) {
      
    }  
  }
  return (
    <div className='w-full'>
      <h1>Thêm mới sản phẩm</h1>
      <form className='flex flex-col [&_input]:border gap-2' onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("name")}/>
        <input type='file' onChange={(e)=>uploadImage(e.target.files)}/>
        {(image!='')&&<img src={image} width={90}/>}
        <input type='hidden' {...register("image")}/>
        <input type='text' {...register("price")}/>
        <button>Thêm mới</button>
      </form>
    </div>
  )
}

export default ProductAdd