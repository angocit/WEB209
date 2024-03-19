import React, { useState } from 'react'

type Props = {}

const Products = (props: Props) => {
    const [name,setName]=useState<string>('')
    const [image,setImage]=useState<string>('')
    const [price,setPrice]=useState<number>(0)
    const [message,setMessage]=useState<string>('')
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        console.log(name,image,price);
        fetch(`http://localhost:3000/products`,{
            method: 'POST',
            body: JSON.stringify({name,image,price})
        }).then(response=>response.json())
        .then(data=>{
            setMessage('Thêm mới thành công')
        })
        .catch(error=>{
            setMessage('Lỗi')
        })
    }
  return (
    <div className='container'>
        <h1>Thêm mới sản phẩm</h1>
        {message}
        <form onSubmit={handleSubmit}>
            <input onChange={(e:any)=>{setName(e.target.value)}} type='text' placeholder='Tên sản phẩm'/><br/>
            <input onChange={(e:any)=>{setImage(e.target.value)}} type='text' placeholder='Ảnh sản phẩm'/><br/>
            <input onChange={(e:any)=>{setPrice(e.target.value)}} type='number' placeholder='Giá tiền'/><br/>
            <button type='submit'>Thêm mới</button>
        </form>
    </div>
  )
}

export default Products