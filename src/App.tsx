import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
interface IProduct {
  name: string;
  price: string;
  id: number;
  image: string;
  category: string;
}
function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [products,setProduct] = useState<IProduct[]>([])
  const [value,setValue] = useState<string>('')
  useEffect(()=>{
    const getProductbytitle = async (name:string)=>{
        try {
          if (name!==''){
          const {data} = await axios.get(`http://localhost:3000/products?name_like=${name}`)
          setProduct(data)
          }
          else {
            setProduct([])
          }
        } catch (error) {
          
        }
    }
    const timeout = setTimeout(()=>{
        // console.log('Giá trị '+value); 
        getProductbytitle(value)
    },500)
    return ()=>{
      clearTimeout(timeout)
    }       
  },[value])
  return (
    <>
      {/* <h1>Vite + React</h1> */}
      <input onChange={(e:any)=>setValue(e.target.value)} placeholder='Nhập tên sản phẩm'/>
      {products.length>0&&<ul className='listproduct'>
        {products.map(item=>
          <li key={item.id}>{item.name}</li>
        )}  
      </ul>}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count2 is {count2}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
