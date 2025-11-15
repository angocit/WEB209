import React from 'react'
import { Button, Form, Input, InputNumber, message, Radio } from 'antd';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import type { IProduct } from '../../types/product';
type Props = {}

const AddProduct = (props: Props) => {
    const queryclient = useQueryClient()
    const mutation = useMutation({
        mutationFn: async(productdata)=>{
           const {data} = await axios.post("http://localhost:3000/products",productdata)
            return data
        },
        onSuccess:(product)=>{
            // alert("Thêm mới thành công")
            message.success("Thêm mới thành công")
            queryclient.setQueryData(["AllProduct"],(products:any)=>{
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
        mutation.mutate(data)       
    }
  return (
    <Form 
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
      <Form.Item label="Ảnh"  name="image" rules={[
        {required:true,message:"Ảnh không để trống"}
      ]}>
        <Input placeholder="1000" />
      </Form.Item>
      <Form.Item label="Giá tiền"  name="price"
      rules={[
        {min:1000,message:"Giá>1000"},
        {type:"number",message:"Giá phải là số"},
        {required:true,message:"Giá không để trống"},
      ]}
      >
        <InputNumber min={1000}/>
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