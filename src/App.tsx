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
  return (
    <>
     <h1>Danh sách các việc đã làm</h1>
     <ul>
     {todolist.map(todo=>(
        <li>{todo.title}</li>
     ))}
     </ul>
    </>
  )
}

export default App
