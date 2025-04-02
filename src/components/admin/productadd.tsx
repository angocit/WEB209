import { useQueryClient, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IProduct } from '../../interface/product'
import { useNavigate } from 'react-router-dom'
import { api } from '../../config/axios'

const ProductAdd = () => {
    const {register,handleSubmit,reset} = useForm<IProduct>()
    const [image,setImage] = useState<string> ("")
    const [loading,setLoading] = useState<boolean>(false)
    const queryclient = useQueryClient()
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn: async(product:IProduct)=>{
            try {
                const {data} =await api.post(`products`,product)
                return data
            } catch (error) {
                console.log(error);                
            }
        },
        onSuccess:(response)=>{
            alert("Thêm thành công")
            console.log(response);            
            queryclient.invalidateQueries({queryKey:["products"]})
            navigate("/dashboard/product-list")
        }        
    })
const onSubmit = (product:IProduct)=>{
    mutation.mutate(product)
}
const uploadImage = async (file:any)=>{
    console.log(file[0]);
    setLoading(true)
    const formdata = new FormData()
    formdata.append('file',file[0])
    formdata.append('upload_preset','reacttest')
    const endpoint = 'https://api.cloudinary.com/v1_1/dkpfaleot/image/upload'
    try {
        const {data} = await api.post(endpoint,formdata)
        console.log(data);
        reset({
            images: data.url
        })
        setImage(data.url)
        setLoading(false)
    } catch (error) {
        
    }
    
}
  return (
    <div>
        <h1>Thêm mới sản phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-xl mx-auto flex flex-col gap-2 [&_input]:border [&_input]:px-2 [&_input]:py-1 [&_input]:rounded'>
            <input type='text' {...register("name")} placeholder='Tên sản phẩm'/>
            <input type='file' onChange={(e)=>uploadImage(e.target.files)}/>
            {(loading)&&<>Đang tải ảnh...</>}
            {(image!="")&&<img src={image} width={120}/>}
            <input type='hidden' {...register("images")} placeholder='Ảnh sản phẩm'/>
            <input type='text' {...register("price")} placeholder='Giá sản phẩm'/>
            <button>Thêm mới</button>
        </form>
    </div>
  )
}

export default ProductAdd