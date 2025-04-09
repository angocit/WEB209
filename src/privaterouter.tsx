import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
    children:ReactNode
}

const PrivateRouter = ({children}: Props) => {
   let user = true 
  return (
    <>{(user)?children:<Navigate to={'/login'}/>}</>
  )
}

export default PrivateRouter