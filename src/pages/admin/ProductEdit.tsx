import { Button, Form, Input, InputNumber, message } from 'antd'
import React from 'react'
import type { IProduct, TProduct } from '../../interface/product'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const ProductEdit = () => {    
    const {id} = useParams()
    const {data,isLoading} = useQuery<IProduct>({
        queryKey: ["products",id],
        queryFn: async()=>{
            const {data} = await axios.get(`http://localhost:3000/product/${id}`)
            return data
        }
    })
    const queryclient = useQueryClient()
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn: async (productdata:TProduct)=>{
            try {
            const {data} = await axios.put(`http://localhost:3000/product/${id}`,productdata)
            return data
            } catch (error) {
                throw error
            }
        },
        onSuccess: (data:IProduct)=>{
            message.success("Cập nhật thành công")
            queryclient.getQueryData(["products"])&&
            queryclient.setQueryData(["products"],(olddata:IProduct[])=>olddata.map(item=>(item.id==Number(id))?data:item))
            navigate('/admin/products')
        },
        onError:()=>{
            message.error("Cập nhật thất bại")
        }
    })
    const onFinish = (productdata:TProduct)=>{
            // console.log(productdata);  
            mutation.mutate(productdata)    
        }
    if (isLoading) return <>Đang tải...</>
  return (
    <>
    <h1 className='text-center text-2xl uppercase mb-5'>Sửa sản phẩm</h1>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={data}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item<TProduct>
      label="Tên sản phẩm"
      name="name"
      rules={[
        { required: true, message: 'Tên không được để trống'}
    ]}
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

export default ProductEdit