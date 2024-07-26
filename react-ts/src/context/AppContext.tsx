import React, { createContext, useReducer } from 'react'

type Props = {
    children:React.ReactNode
}
type TAppState = {
    isLogin:boolean,
    isRegister:boolean,
    Message:{status:boolean,text?:string}
}
type TAction = {
    type:string,
    value:boolean,
    text?:string
}
const Reduceer = (state:TAppState,action:TAction)=>{
    if (action.type === 'register'){
        return {...state,isRegister: action.value}
    }
    else if (action.type === 'login'){
        return {...state,isLogin: action.value}
    }
    else if (action.type === 'message'){
        return {...state,Message:{status:action.value,text:action.text}}
    }
    else {
        return state
    }
}
export const AppCT = createContext({} as any)
const AppContext = ({children}: Props) => {
    // const [appState,dispatch] = useReducer(Hàm xử lý Action (dispatch), giá trị khởi tạo) 
    const [appState,dispatch] = useReducer(Reduceer,{isLogin:false,isRegister:false,Message:{status:false,text:''}})
  return (
    <AppCT.Provider value={{appState,dispatch}}>{children}</AppCT.Provider>
  )
}

export default AppContext