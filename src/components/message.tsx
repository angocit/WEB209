import React, { useContext, useEffect } from 'react'
import { ActionCT } from '../context/action'

const Message = () => {
  const {userAction,dispatch} = useContext(ActionCT)
  useEffect(()=>{
    setTimeout(()=>{
      dispatch({type:'message',value:false,text:''})
    },2900)
  },[])
  return (
    <div className='fixed top-2 right-2 bg-white z-50 py-4 px-6 shadow-sm w-[300px]'>
      <h4>Thông báo</h4>
      {userAction.Message.text}
      <span className={(userAction.Message.type)?'progress success':'progress error'}></span>
    </div>
  )
}

export default Message