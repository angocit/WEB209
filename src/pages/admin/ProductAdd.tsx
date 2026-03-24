import { Button, Form, Input, InputNumber, message } from 'antd'
import React from 'react'
import type { IProduct, TProduct } from '../../interface/product'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProductAdd = () => {
  const queryclient = useQueryClient()
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn:async (productdata:TProduct)=>{
        try {
          const {data} = await axios.post(`http://localhost:3000/product`,productdata)
          return data
        } catch (error) {
          throw error
        }
    },
    onSuccess: (data:IProduct)=>{
      message.success("Thêm mới thành công")
      // Cập nhật dữ liệu vào querykey
      queryclient.getQueryData(["products"])&&
      queryclient.setQueryData(["products"],(olddata:IProduct[])=>[...olddata,data])
      navigate('/admin/products')
    },
    onError: (err)=>{
      message.error("Thêm thất bại")
    }
  })
  const onFinish = (productdata:TProduct)=>{
      // console.log(productdata);  
      mutation.mutate(productdata)    
  }
  return (
    <>
    <h1 className='text-center text-2xl uppercase mb-5'>Thêm mới sản phẩm</h1>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item<TProduct>
      label="Tên sản phẩm"
      name="name"
      rules={[{ required: true, message: 'Tên không được để trống' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<TProduct>
      label="Ảnh sản phẩm"
      name="image"
      rules={[{ required: true, message: 'Ảnh không được để trống' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<TProduct>
      label="Giá tiền"
      name="price"
      rules={[
        { required: true, message: 'Giá >= 1000',type:'number',min:1000 }
      ]}
    >
      <InputNumber/>
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </>
  )
}

export default ProductAdd