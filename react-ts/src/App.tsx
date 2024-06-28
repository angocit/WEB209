import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
interface ITodo {
  id?:number|string;
  title:string;
  complete:boolean;
}
function App() {
  const [todos,setTodo]=useState<ITodo[]>([])
  const [count, setCount] = useState(0)
  const [newtodo,setNewtodo] = useState('')
  useEffect(()=>{
    fetch("http://localhost:3000/todo").then(
      response=>response.json()
    ).then(data=>{
      console.log(data);
      setTodo(data)
    })
  },[])
  const handleClickAdd =()=>{
    const data:ITodo = {
        title:newtodo,
        complete:true
    }
    fetch("http://localhost:3000/todo",{
      method:"POST",
      body:JSON.stringify(data),
      headers:{"Content-Type": "application/json"}
    }).then(response=>response.json())
    .then((data:ITodo)=>{
      setTodo([...todos,data])
      alert("Thêm mới thành công")
    })
  }
  const Set_new_todo =(value:any)=>{
    setNewtodo(value)
  }
  const onDelete = (id:any)=>{
    if (confirm("Are you sure you want to delete")){
      fetch("http://localhost:3000/todo/"+id,{
        method:"DELETE"
      }).then(response=>response.json())
      .then((data:ITodo)=>{
        const newtodos = todos.filter(todo=>todo.id!==id)
        setTodo(newtodos)
        alert("Xóa thành công")
      })      
    }
  }
  const changeStatus = (id:any)=>{
    const newtodos = todos.map(todo=>{
      if (todo.id ==id){
        todo.complete = !todo.complete
      }
      return todo
    })
    setTodo(newtodos)
  }
  const updateTodo = (id:any)=>{
    fetch("http://localhost:3000/todo/"+id,{
      method: "PUT",
      body: JSON.stringify({title:newtodo,complete:true}),
      headers:{"Content-Type": "application/json"}
    }).then(res=>res.json())
    .then(data=>{
      alert("Sửa thành công")
      const newtodos = todos.map(todo=>{
        if (todo.id ==id){
          todo.title = newtodo
          todo.complete = true
        }
        return todo
      })
      setTodo(newtodos)
    }).catch(err=>{
      console.log(err);
      
    })
  }
  return (
    <>
    <input type='text' onChange={(e)=>Set_new_todo(e.target.value)}/>
    <button onClick={handleClickAdd}>Thêm danh sách</button>
    <ul>
      {
        todos.map((todo:ITodo)=>(
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
