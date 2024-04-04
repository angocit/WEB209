import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
    user: boolean,
    children: React.ReactNode
}

const PrivateRouter = ({user,children}: Props) => {
  return (
  (user)?<>{children}</>:Navigate({to:'/'})
  )
}

export default PrivateRouter