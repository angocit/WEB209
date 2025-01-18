import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
interface IProduct {
  id?: number;
  name: string;
  price: number;
}

const HomeComponent = () => {
  const [products,setProduct] = useState<IProduct[]>([])
  const handleLoad = async ()=>{
      try {
          const {data} = await axios.get(`http://localhost:3000/products`)
          setProduct(data)
      } catch (error) {
        
      }
  }
  useEffect(()=>{
    console.log(`useEffect mouting`);
    
    handleLoad()
  },[])
  const onDelete = async(id:number|string)=>{
    try {
      // confirm
      if (confirm("Bạn chắc chứ?")){
          await axios.delete(`http://localhost:3000/products/${id}`)        
          const newproducts = products.filter(item=>item.id!=id)          
          alert('Xóa thành công')
          // Set lại state
          setProduct(newproducts)
      }
    } catch (error) {
        console.log(error);        
    }
  }
  return (
    <>     
      <h1 className='text-[36px] text-[#acaa13] mb-[60px]'>Danh sách sản phẩm:</h1>
      <table className='[&_*]:text-left [&_td]:px-[10px] [&_td]:py-2 [&_th]:px-[10px] max-w-[500px] mx-auto border [&_td]:border [&_th]:border'>
        <thead>
          <tr>
            <th className='w-[50px]'>STT</th>
            <th className='w-[300px]'>Tên sản phẩm</th>
            <th className='w-[100px]'>Giá tiền</th>
            <th className='w-[150px]'>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((item,index)=>(
              <tr key={item.id}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td className='flex gap-2'>
                      <Link to={`/edit-product/${item.id}`} className='bg-[#3c11e8] text-white px-[15px] py-[4px] rounded'>Sửa</Link>
                      <button onClick={()=>onDelete(`${item.id}`)} className='bg-[#7a0a0c] text-white px-[15px] py-[4px] rounded'>Xóa</button>
                  </td>
              </tr>
            ))
          }
        </tbody>
      </table>      
    </>
  )
}

export default HomeComponent