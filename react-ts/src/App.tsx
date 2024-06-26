import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodo]=useState([
    {id:1,title:"To do 1",complete: true},
    {id:2,title:"To do 2",complete: true},
    {id:3,title:"To do 3",complete: true}
  ])
  const [count, setCount] = useState(0)
  const [newtodo,setNewtodo] = useState('')
  const handleClickAdd =()=>{
    setTodo([...todos,{id:todos.length+1,title:newtodo,complete:true}])
  }
  const Set_new_todo =(value:any)=>{
    setNewtodo(value)
  }
  const onDelete = (id:any)=>{
    if (confirm("Are you sure you want to delete")){
      const newtodos = todos.filter(todo=>todo.id!==id)
      setTodo(newtodos)
    }
  }
  const changeStatus = (id:number)=>{
    const newtodos = todos.map(todo=>{
      if (todo.id ==id){
        todo.complete = !todo.complete
      }
      return todo
    })
    setTodo(newtodos)
  }
  const updateTodo = (id:number)=>{
    const newtodos = todos.map(todo=>{
      if (todo.id ==id){
        todo.title = newtodo
        todo.complete = true
      }
      return todo
    })
    setTodo(newtodos)
  }
  return (
    <>
    <input type='text' onChange={(e)=>Set_new_todo(e.target.value)}/>
    <button onClick={handleClickAdd}>Thêm danh sách</button>
    <ul>
      {
        todos.map(todo=>(
          (todo.complete)?
          (<li key={todo.id}> {todo.title}<button onClick={()=>{changeStatus(todo.id)}}>Sửa</button> <button onClick={()=>onDelete(todo.id)}>Xóa</button></li>)
          :(<li key={todo.id}>
            <input type='text' defaultValue={todo.title} onChange={(e)=>Set_new_todo(e.target.value)}/>
            <button onClick={()=>updateTodo(todo.id)}>Lưu</button>
            <button onClick={()=>changeStatus(todo.id)}>Hủy</button>
          </li>)
        ))
      }
      </ul>
      
    </>
  )
}

export default App
