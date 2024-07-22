import React from 'react'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

type Props = {}

const Client = (props: Props) => {
  return (
    <>
    <Header/>
        <main className='max-w-7xl mx-auto min-h-screen px-2 sm:px-6 lg:px-8 py-10'>
        <Outlet/>
        </main>
    <Footer/>
    </>
  )
}

export default Client