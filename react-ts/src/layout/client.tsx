import React from 'react'
import Header from './client/header'
import Footer from './client/footer'
import { Outlet } from 'react-router-dom'

type Props = {}

const Client = (props: Props) => {
  return (
    <>
        <Header/>
        <div className='max-w-[1200px] mx-auto'>
        <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Client