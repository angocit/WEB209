import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios'
import './App.css'
interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}
type formType = Pick<IProduct,'name'|'price'|'image'|'category'>
function App() {
  const [products,setProducts] = useState<IProduct[]>([])
  const {register,handleSubmit,reset} = useForm<formType>()
  const [flag,setFlag] = useState<string|number>(0)
  useEffect(()=>{
     (async ()=>{
        const {data} = await axios.get("http://localhost:3000/products")
        setProducts(data)
     })()
  },[])
  const onSubmit =async(formData:any)=>{
      // console.log(data);
      try {
        const {data} = await axios.post("http://localhost:3000/products",formData) 
        setProducts([...products,data])
        reset()
      } catch (error) {
        console.log(error);
        
      }        
  } 
  const onDelete = async(id:number)=>{
    try {
      if (confirm("Are you sure you want to delete")){
        const {data}= await axios.delete(`http://localhost:3000/products/${id}`)
        alert("Xóa thành công")
        setProducts(products.filter((product:IProduct)=>product.id!==id))
      }
      } catch (error) {
      
    }
  }
  const onSubmitUpdate =async(formData:any)=>{
    // console.log(data);
    try {
      const {data} = await axios.put("http://localhost:3000/products/"+flag,formData)
      //  console.log(data);
       console.log(flag);
       const newproduct = products.map((product:IProduct)=>{
             if (product.id==flag){
              product = data
          }
            return product
       })      
      setProducts(newproduct)
      setFlag(0)
      reset()
    } catch (error) {
      console.log(error);
      
    }        
}
  const onEdit = (id:number|string) => {
    setFlag(id)
    const product = products.filter((p:IProduct)=>p.id===id)
    reset({
        name:product[0].name,
        image:product[0].image,
        price:product[0].price,
        category:product[0].category
    })
  }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("name")} placeholder='Tên sản phẩm'/>
        <input type='text' {...register("image")} placeholder='Ảnh sản phẩm'/>
        <input type='number' {...register("price")} placeholder='Giá sản phẩm'/>
        <input type='text' {...register("category")} placeholder='Danh mục'/>
        <button type='submit'>Thêm mới</button>  
    </form>   
    <h1>Danh sách sản phẩm</h1> 
        <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Danh mục</th>
                <th>Giá tiền</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
               {products.map((product:IProduct,index)=>(
                (product.id===flag)?
                <tr key={product.id}>
                  <td colSpan={5}>
                  <form onSubmit={handleSubmit(onSubmitUpdate)}>
                    <input type='text' {...register("name")} placeholder='Tên sản phẩm'/>
                    <input type='text' {...register("image")} placeholder='Ảnh sản phẩm'/>
                    <input type='number' {...register("price")} placeholder='Giá sản phẩm'/>
                    <input type='text' {...register("category")} placeholder='Danh mục'/>
                    <button type='submit'>Update</button>  
                    <button type='button' onClick={()=>setFlag(0)}>Hủy</button>  
                </form> 
                </td>
              </tr>
                :
                <tr key={product.id}>
                    <td>{index+1}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td><button onClick={()=>onEdit(product.id)}>Sửa</button><button onClick={()=>onDelete(product.id)}>Xóa</button></td>
                </tr>
               ))}
            </tbody>
        </table>  
    </>
  )
}

export default App
