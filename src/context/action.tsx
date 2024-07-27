import React, { createContext, useReducer } from 'react'
import { UserReducer } from '../reducer/useraction'
export const ActionCT = createContext({} as any)
const ActionContext = ({children}:{children:React.ReactNode}) => {
  const [userAction,dispatch] = useReducer(UserReducer,{isLogin:false,isRegister:false,Message:{status:false,text:'',type:false}}) 
  return (
    <ActionCT.Provider value={{userAction,dispatch}}>{children}</ActionCT.Provider>
  )
}

export default ActionContext