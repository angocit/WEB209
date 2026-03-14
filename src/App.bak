import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import type { IProduct } from './interface/product'
import ProductItem from './components/client/productitem'
interface IMessage{
  user:string,
  message:string
}

function App() {
  const [messages, setMessage] = useState<IMessage[]>([])
  const [count,setCount] = useState<number>(0)
  const [isClick,setisClick] = useState<boolean>(false)
  const [products,setProduct] = useState<IProduct[]>([])
  const [text,setText] = useState<string>('')
  // useEffect(hàm_callback,[dependences])
  // useEffect(()=>{
  //     setCount(count+1)
  // },[messages,isClick])
  useEffect(()=>{
      (async()=>{
          const {data} = await axios.get(`http://localhost:3000/product`)
          setProduct(data)
        })()  // IIFE
  },[])
  const handleClick = ()=>{
      setMessage([...messages,{user:"Ngoc",message:"Xin chào"} as IMessage])
      setMessage(oldvalue=>[...oldvalue,{user:"Bot",message:"Chào bạn"} as IMessage])
  }
  const sendMessage = (mess:string)=>{
    alert(mess)
  }
  return (
    <div>
      <input onChange={(e)=>setText(e.target.value)} type='text' placeholder='Nhập gì đó vào đây'/>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
     <h3>Danh sách sản phẩm</h3>
     <div className='products grid grid-cols-4'>
      {products.map((product,index)=>(
        <ProductItem index={index} sendMessage={sendMessage} isEven ={(index%2)==0} key={product.id} product={product}/>
      ))}
      </div>
      Số hiện tại là: {count}
      <ul>
      {messages.map((message)=>(
        <li>
          <h3>{message.user}</h3>
          <span>{message.message}</span>
        </li>
      ))}
      </ul>
        <button onClick={()=>handleClick()}>Send Message</button>
        <button onClick={()=>setisClick(!isClick)}>Thay đổi button</button>
    <h3>Đề xuất</h3>
     <div className='products grid grid-cols-4'>
      {products.map((product,index)=>(
        <ProductItem sendMessage={sendMessage} isEven ={(index%2)==0} key={product.id} product={product}/>
      ))}
      </div>
    </div>
  )
}

export default App
