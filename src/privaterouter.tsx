import React from 'react'

type Props = {
    children:React.ReactNode
}
const PrivateRouter = ({children}: Props) => {
    const user= sessionStorage.getItem('user')
    if (user) {
        return (
            <>{children}</>
          )
    }
    else {
        return <>Bạn không có quyền truy cập</>
    }
  
}

export default PrivateRouter