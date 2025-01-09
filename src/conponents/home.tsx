import React, { useState } from 'react'

// type Props = {}
type Itodo = {
    id:number,
    name:string
}
const HomeComponent = () => {
    // const [count, setCount] = useState<number>(0)
    const [todos,setTodo] = useState<Itodo[]>([
        {id:1,name:"Todo 1"}
    ])
    // console.log("Render");    
    const addTodo = ()=>{
        // const todo2 = [...todos,{id:2,name:"Todo 2"}]
        // setTodo(todo2)
        setTodo([...todos,{id:2,name:"Todo 2"}])
  }
  return (
    <>
      <h1>Danh sách việc là:</h1>
      {
        todos.map(item=>(
            <p>{item.name}</p>
        ))
      } 
      <button onClick={addTodo}>Thêm việc</button>
    </>
  )
}

export default HomeComponent