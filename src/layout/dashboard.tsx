import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <>
    <div>Header</div>
    <Outlet/>
    <div>Footer</div>
    </>
  )
}

export default Dashboard