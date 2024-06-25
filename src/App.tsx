import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todolist,setTodolist] = useState([
    {id:1,title:"To do 1",complete:true},
    {id:2,title:"To do 2",complete:true},
    {id:3,title:"To do 3",complete:true}
  ])
  const [newtodo,setNewtodo] = useState('')
  const DeleteTodo =(id:number)=>{
    if(confirm("Are you sure you want to delete")){
      const newtodolist = todolist.filter(todo=>todo.id !== id)
      setTodolist(newtodolist) 
    }
  }
  const handleAdd=()=>{
    setTodolist([...todolist,{id:todolist.length+1,title:newtodo,complete:true}])
  }
  return (
    <>
     <h1>Danh sách các việc đã làm</h1>
     <input type='text' placeholder='Nhập gì đó vào đây' onChange={(e)=>{setNewtodo(e.target.value)}}/>
     <button onClick={handleAdd}>Thêm</button>
     <ul>
     {todolist.map(todo=>(
        <li>{todo.title} <button onClick={()=>DeleteTodo(todo.id)}>Xóa</button></li>
     ))}
     </ul>
    </>
  )
}

export default App
