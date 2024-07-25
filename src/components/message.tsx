import React, { useContext, useEffect } from 'react'
import { AppCT } from '../context/appContext'

const MessageBox = () => {
    const {AppState,dispatch} = useContext(AppCT)
    useEffect(()=>{
        setTimeout(()=>{
            dispatch({type:'message',value:false,text:''})
        },3000)
    },[])
  return (
    <div className='fixed top-0 right-0 shadow-xl py-4 px-6 bg-white'>
        <h5>Thông báo:</h5>
        {(AppState.Message?.text)&&<>{AppState.Message?.text}</>}
        <div className='progress-bar'></div>
    </div>
  )
}

export default MessageBox