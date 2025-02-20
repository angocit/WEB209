import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const Privaterouter = ({children}: Props) => {
    const userinfo = localStorage.getItem("user")
    const user = JSON.parse(userinfo as string)
  return (user.role=='admin')?children:<>Bạn không có quyền truy cập</>
}

export default Privaterouter