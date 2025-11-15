import React from 'react'
import { Button, Form, Input, message, Radio } from 'antd';
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
      <Form.Item label="Tên sản phẩm" name="name">
        <Input placeholder="Tên sản phẩm" />
      </Form.Item>
      <Form.Item label="Ảnh"  name="image">
        <Input placeholder="1000" />
      </Form.Item>
      <Form.Item label="Giá tiền"  name="price">
        <Input placeholder="1000" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Thêm mới</Button>
      </Form.Item>
    </Form>
  )
}

export default AddProduct