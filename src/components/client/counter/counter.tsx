import React from 'react'

type Props = {
    counter: number,
    setCounter: (value:number)=>void
}

const Counter = ({counter,setCounter}: Props) => {
  return (
    <div>
        Giá trị {counter}
        <button className='bg-red-700 p-2 text-white' onClick={()=>setCounter(counter+1)}>Tăng</button>
    </div>
  )
}

export default Counter