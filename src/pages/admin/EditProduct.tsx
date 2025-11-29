import React from 'react'
import { Button, Form, Input, InputNumber, message, Radio } from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import type { IProduct } from '../../types/product';
import { useNavigate, useParams } from 'react-router-dom';
type Props = {}

const EditProduct = (props: Props) => {
    const queryclient = useQueryClient()
    const params = useParams()
    const navigate = useNavigate()
    const {data:product,isLoading} = useQuery<IProduct>({
        queryKey:["productDetail",params.id],
        queryFn: async ()=>{
            const {data} = await axios.get(`http://localhost:3000/products/${params.id}`)
            return data
        }
    })
    const mutation = useMutation({
        mutationFn: async(productdata)=>{
           const {data} = await axios.put(`http://localhost:3000/products/${params.id}`,productdata)
            return data
        },
        onSuccess:(product)=>{
            // alert("Thêm mới thành công")
            message.success("Cập nhật thành công")
            queryclient.setQueryData(["AllProduct"],(products:any)=>{
                return products.map((p:IProduct)=>(p.id==Number(params.id))?product:p)
            })
            navigate("/admin/products")
            // Cập nhật sản phẩm mới vào react query
        },
        onError:()=>{
            message.error("Cập nhật thất bại")
        }
    })
    const onFinish =(data:any)=>{
        // console.log(data); 
        mutation.mutate(data)       
    }
    if (isLoading) return <>Đang tải...</>
  return (
    <>
        <h1 className='text-2xl text-center mb-5'>Sửa sản phẩm</h1>    
    <Form 
    labelCol={{ flex: '110px' }}
    onFinish={onFinish}
    initialValues={product}
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
        {type:"number",min:1000,message:"Giá phải là số và >1000"},
        {required:true,message:"Giá không để trống"},
      ]}
      >
        <InputNumber min={0}/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Cập nhật</Button>
      </Form.Item>
    </Form>
    </>
  )
}

export default EditProduct