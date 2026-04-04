import React, { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './hooks/auth'

type Props = {
    children:ReactNode
}

const PrivateRouter = ({children}: Props) => {
    const {isAdmin,isLoading} = useAuth()
    if (isLoading) return <>Đang tải...</>    
  return (isAdmin)?<>{children}</>:<Navigate to={'/login'} />
}

export default PrivateRouter