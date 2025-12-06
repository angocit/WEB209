import React, { useState } from 'react'
import { Button, Form, Input, InputNumber, message, Radio, Upload, type UploadProps } from 'antd';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import type { IProduct } from '../../types/product';
import { UploadOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
type Props = {}

const AddProduct = (props: Props) => {
    const queryclient = useQueryClient()
    const [form] = useForm<any>()
    const [imageUrl,setImage] = useState<string>('')
    const mutation = useMutation({
        mutationFn: async(productdata)=>{
           const {data} = await axios.post("http://localhost:3000/products",productdata)
            return data
        },
        onSuccess:(product)=>{
            // alert("Thêm mới thành công")
            message.success("Thêm mới thành công")
            queryclient.getQueryData(["AllProduct"])&&queryclient.setQueryData(["AllProduct"],(products:any)=>{
                return [...products,product]
            })
            // Cập nhật sản phẩm mới vào react query
        },
        onError:()=>{
            message.error("Thêm thất bại")
        }
    })
    const onFinish =(data:any)=>{
        // console.log(data); 
        data.image = imageUrl
        mutation.mutate(data)       
    }
    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    {
        // console.log(newFileList[0].response.url);
        const image = newFileList[0]?.response?.url
        if (image){
          // console.log('aaa',image);          
          // form.setFieldValue("image",image)
          setImage(image)
        }
        // if (newFileList)
        // newFileList&&newFileList[0]&&newFileList[0].response&&        
    }
  return (
    <Form
    form={form} 
    labelCol={{ flex: '110px' }}
    onFinish={onFinish}
    >
      <Form.Item label="Tên sản phẩm" name="name"
      rules={[
        {required:true,message:"Tên không để trống"},
        {min:6,message:"Tên phải > 6 kí tự"}
    ]}
      >
        <Input placeholder="Tên sản phẩm" />
      </Form.Item>
      {/* <Form.Item label="Ảnh"  name="image" rules={[
        {required:true,message:"Ảnh không để trống"}
      ]}>
        <Input placeholder="1000" />
      </Form.Item> */}
      <Upload
        action="https://api.cloudinary.com/v1_1/dyzal5ujh/image/upload"
        listType="picture"
        data = {{'upload_preset':'wd20204'}}
        onChange={handleChange}
        maxCount ={1}
      >
        <Button type="primary" icon={<UploadOutlined />}>
          Upload
        </Button>
      </Upload>
      <Form.Item label="Giá tiền"  name="price"
      rules={[
        {type:"number",min:1000,message:"Giá phải là số và >1000"},
        {required:true,message:"Giá không để trống"},
      ]}
      >
        <InputNumber min={0}/>
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[
        {pattern:/^\S+@+\S+\.[a-z]{2,6}$/,message:"Mail không đúng định dạng"}
      ]}>
        <Input placeholder='Email'/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Thêm mới</Button>
      </Form.Item>
    </Form>
  )
}

export default AddProduct