import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IProduct } from '../../interface/product'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { createData, ListData } from '../../services/data'
import { Button, Upload, UploadFile, UploadProps } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const ProductAdd = () => {
  const fileList: UploadFile[] = []
  const [gallery,setGallery] = useState<string[]>([])
  const [image,setImage] = useState<string>('')
  const {register,handleSubmit,reset} = useForm<IProduct>()
  const {data:categorys,isLoading} = useQuery({
    queryKey: ["categorys"],
    queryFn: async ()=>{
        try {
          const {data} = await ListData("categorys")
          return data
        } catch (error) {
          
        }
    }
  })
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
    productData.gallerys = gallery
    // console.log(gallery);    
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
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
  {
    console.log(newFileList);   
    const listimg =  newFileList.map(item=>item.response?.url)
    setGallery(listimg)
    // setFileList(newFileList);  
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
        <select {...register("category")}>
            {categorys&&categorys.map((item:any)=>(
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
        </select>
        <label>Gallery sản phẩm</label>
        <Upload
          action="https://api.cloudinary.com/v1_1/dkpfaleot/image/upload"
          listType="picture"
          defaultFileList={fileList}
          onChange={handleChange}
          data = {{upload_preset:"reacttest"}}
          multiple = {true}
        >
          <Button type="primary" icon={<UploadOutlined />}>
            Upload
          </Button>
        </Upload>
        <button>Thêm mới</button>
      </form>
    </div>
  )
}

export default ProductAdd