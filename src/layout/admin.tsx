import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../conponents/admin/header'
import Sidebar from '../conponents/admin/sidebar'

const Dashboard = () => {
  return (
    <div className='bg-[#f6f9ff]'>
        <Header/>
        <div className='flex'>
        <Sidebar/>
        <div className='content w-4/5'>
            <Outlet/>
        </div>
        </div>
        <footer>Đây là chân trang admin</footer>
    </div>
  )
}

export default Dashboard