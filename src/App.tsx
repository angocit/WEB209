import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
type ITodo = {
  id:string|number,
  title:string,
  complete:boolean
}
function App() {
  const [count, setCount] = useState(0)
  const [newtodo, setNewtodo] = useState('')
  const [todos, setTodos]= useState<ITodo[]>([])
  useEffect(()=>{
    fetch("http://localhost:3000/todos").then(response => response.json())
    .then((data: ITodo[]) =>{
      setTodos(data)
    })

  },[])
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
  const deleTodo = (id:number|string)=>{
    if(confirm("Are you sure")){
    const newtodos = todos.filter(todo=>todo.id!==id)
    setTodos(newtodos)
  }
  }
  const changeStatus = (id:number|string)=>{
     const newtodos = todos.map(todo=>{
        if (todo.id==id){
          todo.complete = !todo.complete
        }
        return todo
     })
     setTodos(newtodos)
  }
  const updateTodo =(id:number|string)=>{
    const newtodos = todos.map(todo=>{
      if (todo.id==id){
        todo.title = newtodo
        todo.complete = !todo.complete
      }
      return todo
   })
   setTodos(newtodos)
  }
  return (
    <>
    <input type='text' onChange={(e)=>setTodoValue(e.target.value)}/>
    <button onClick={handleAddTodo}>Thêm vào danh sách</button>
    <ul>
    {todos.map(todo=>(
      (todo.complete)?
      <li>{todo.title} <button onClick={()=>{deleTodo(todo.id)}}>Xóa</button><button onClick={()=>changeStatus(todo.id)}>Sửa</button></li>
      : <li><input type='text' defaultValue={todo.title} onChange={(e)=>setTodoValue(e.target.value)}/> <button onClick={()=>updateTodo(todo.id)}>Lưu</button><button onClick={()=>changeStatus(todo.id)}>Hủy</button></li>
    ))}
    </ul>
    {count}
     <button onClick={handclick}>Thay đổi state</button>
    </>
  )
}

export default App
