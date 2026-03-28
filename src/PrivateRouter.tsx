import React, { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
    children:ReactNode
}

const PrivateRouter = ({children}: Props) => {
    const user = {
        username:'admin',
        role:'admin'
    }
  return (user.role=='admin')?<>{children}</>:<Navigate to={'/login'} />
}

export default PrivateRouter