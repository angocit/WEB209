import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios'
import './App.css'
import { IProduct } from './interface/product'
import AddProduct from './components/addProduct'
import Sidebar from './components/sidebar'
import EditProduct from './components/editProduct'

type formType = Pick<IProduct,'name'|'price'|'image'|'category'>
function App() {
  const [products,setProducts] = useState<IProduct[]>([])
  const {register,handleSubmit,reset} = useForm<formType>()
  const [flag,setFlag] = useState<string|number>(0)
  const [click, setClick] = useState<boolean>(false)
  useEffect(()=>{
     (async ()=>{
        const {data} = await axios.get("http://localhost:3000/products")
        setProducts(data)
     })()
  },[]) 
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
      alert('Cập nhật thành công')
      // reset()
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
  const onAdd = async (dataproduct:formType)=>{
    try {
      const {data} = await axios.post("http://localhost:3000/products",dataproduct) 
      setProducts([...products,data])
      alert('Thêm mới thành công')
    } catch (error) {
      console.log(error);
      
    }      
  }
  return (
    <>
    <button onClick={()=>setClick(!click)}>Giỏ hàng</button>
    <Sidebar isActive={click}/>
     <AddProduct title='Thêm mới sản phẩm' onAdd={onAdd}/>
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
                    <EditProduct product={product} onEdit={onSubmitUpdate} setFlag={setFlag}/> 
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
