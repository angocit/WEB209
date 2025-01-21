import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <header>Đây là đầu trang admin</header>
        <Outlet/>
        <footer>Đây là chân trang admin</footer>
    </div>
  )
}

export default Dashboard