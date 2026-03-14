import React from 'react'
import { Outlet } from 'react-router-dom'

const ClientLayout = () => {
  return (
    <div>
        <h1>Client Layout</h1>
        <Outlet/>
    </div>
  )
}

export default ClientLayout