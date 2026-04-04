import React, { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './hooks/auth'

type Props = {
    children:ReactNode
}

const PrivateRouter = ({children}: Props) => {
    const {isAdmin,isLoading,isLogin} = useAuth()
    if (isLoading) return <>Đang tải...</>    
  return (isAdmin)?<>{children}</>:(isLogin)?<Navigate to={'/'} />:<Navigate to={'/login'} />
}

export default PrivateRouter