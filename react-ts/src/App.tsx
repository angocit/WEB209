import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}
function App() {
  const [products,setProducts] = useState<IProduct[]>([])
  useEffect(()=>{
     (async ()=>{
        const {data} = await axios.get("http://localhost:3000/products")
        // console.log(data);
        setProducts(data)
     })()
  })
  return (
    <>   
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
                <tr key={product.id}>
                    <td>{index+1}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td><button>Sửa</button><button>Xóa</button></td>
                </tr>
               ))}
            </tbody>
        </table>  
    </>
  )
}

export default App
