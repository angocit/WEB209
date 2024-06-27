import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}
function App() {
  const [count, setCount] = useState(0)
  const [flag,setFlag] = useState(0)
  const [todolist,setTodolist] = useState<ITodo[]>([])
  useEffect(()=>{
    fetch("http://localhost:3000/todos").then(res=>res.json())
    .then((data:ITodo[])=>{
      setTodolist(data)
    })
  },[])
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
  const onChangetodo = (id:number)=>{
    setFlag(id)
    // const newtodos = todolist.map(todo=>{
    //   if (todo.id==id){
    //     todo.complete = !todo.complete;
    //   }
    //   return todo
    // })
    // setTodolist(newtodos)
  }
  const updateTodo = (id:number)=>{
    const newtodos = todolist.map(todo=>{
      if (todo.id==id){
        todo.title = newtodo
        todo.complete = !todo.complete;
      }
      return todo
    })
    setTodolist(newtodos)
  }
  return (
    <>
     <h1>Danh sách các việc đã làm</h1>
     <input type='text' placeholder='Nhập gì đó vào đây' onChange={(e)=>{setNewtodo(e.target.value)}}/>
     <button onClick={handleAdd}>Thêm</button>
     <ul>
     {todolist.map(todo=>(
        (todo.id!==flag)?
        <li>{todo.title} <button onClick={()=>{onChangetodo(todo.id)}}>Sửa</button><button onClick={()=>DeleteTodo(todo.id)}>Xóa</button></li>
      :<li><input type='text' defaultValue={todo.title} onChange={(e)=>{setNewtodo(e.target.value)}}/> <button onClick={()=>updateTodo(todo.id)}>Lưu</button><button onClick={()=>{onChangetodo(todo.id)}}>Hủy</button></li>
      ))}
     </ul>
    </>
  )
}

export default App
