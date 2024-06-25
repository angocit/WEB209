import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [newtodo, setNewtodo] = useState('')
  const [todos, setTodos]= useState([
    {id:1,title:"To do 1",complete:true},
    {id:2,title:"To do 2",complete:true},
    {id:3,title:"To do 3",complete:true}
  ])
  const handclick =()=>{
    setCount(count+1)
  }
  const setTodoValue =(data:any)=>{
    setNewtodo(data)
  }
  const handleAddTodo = ()=>{
    const todo = {id:todos.length+1,title:newtodo,complete:true}
    setTodos([...todos,todo])
  }
  return (
    <>
    <input type='text' onChange={(e)=>setTodoValue(e.target.value)}/>
    <button onClick={handleAddTodo}>Thêm vào danh sách</button>
    <ul>
    {todos.map(todo=>(
      <li>{todo.title}</li>
    ))}
    </ul>
    {count}
     <button onClick={handclick}>Thay đổi state</button>
    </>
  )
}

export default App
