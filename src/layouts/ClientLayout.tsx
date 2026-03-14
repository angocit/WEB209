import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/client/header'
import Footer from '../components/client/footer'

const ClientLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default ClientLayout