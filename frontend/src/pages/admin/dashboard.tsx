import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import { Outlet } from 'react-router-dom'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <main className='main grid grid-cols-5'>
        <Header></Header>
        <Sidebar/>
        <div className='content p-6 col-start-2 col-end-6 h-[calc(100vh-4rem)] overflow-y-auto'>
            <Outlet/>
        </div>   
    </main>
  )
}

export default Dashboard