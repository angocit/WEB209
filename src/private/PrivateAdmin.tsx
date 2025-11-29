import React, { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
    children:ReactNode
}

const PrivateAdmin = ({children}: Props) => {
    const user ={
        name:"admin",
        role:"user"
    }
  return user.role=='admin'?<>{children}</>:<Navigate to={'/login'}/>
}

export default PrivateAdmin