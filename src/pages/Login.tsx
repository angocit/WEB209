import { useMutation } from '@tanstack/react-query'
import { Button, Checkbox, Form, Input, message } from 'antd'
import axios from 'axios'
import React from 'react'
import { data, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn:async (udata)=>{
            try {
                const {data} = await axios.post(`http://localhost:3000/login`,udata)
                console.log(data);
                sessionStorage.setItem('token',data.accessToken)
                message.success("Đăng nhập thành công")
                navigate('/admin')
            } catch (error:any) {
                console.dir(error.response.data);                
                 message.error(error.response.data)                
            }
        }
    })
    const onFinish = (data:any)=>{
        console.log(data);   
        mutation.mutate(data)     
    }
  return (
    <div>
        <h1>Đăng nhập tài khoản</h1>
        <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Đăng nhập
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default Login