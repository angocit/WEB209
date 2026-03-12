import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
interface IMessage{
  user:string,
  message:string
}
interface IProduct {
  id: number;
  name: string;
  price: number;
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
    const timeout =setTimeout(async()=>{
          const res = await fetch(`http://localhost:3000/product?name_like=${text}`)
          const result = await res.json()
          setProduct(result)
    },500) 
    return ()=>clearTimeout(timeout) 
  },[text])
  const handleClick = ()=>{
      setMessage([...messages,{user:"Ngoc",message:"Xin chào"} as IMessage])
      setMessage(oldvalue=>[...oldvalue,{user:"Bot",message:"Chào bạn"} as IMessage])
  }
  return (
    <div>
      <input onChange={(e)=>setText(e.target.value)} type='text' placeholder='Nhập gì đó vào đây'/>
     
     <h3>Kết quả tìm kiếm</h3>
     <ul>
      {products.map((product)=>(
        <li>
          <h3>{product.name}</h3>
        </li>
      ))}
      </ul>
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
    </div>
  )
}

export default App
