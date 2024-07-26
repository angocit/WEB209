import React, { useContext, useEffect } from 'react'
import { AppCT } from '../context/AppContext'

const MessageBox = () => {
    const {appState,dispatch} = useContext(AppCT)
    useEffect(()=>{
        setTimeout(()=>{
            dispatch({type:'message',value:false,text:''})
        },3000)
    },[])
  return (
    <div className='fixed w-[300px] top-2 right-2 bg-white p-2 shadow-sm'>
        <h4>Thông báo</h4>
        {appState.Message.text}
        <span className='progress-bar'></span>
    </div>
  )
}

export default MessageBox