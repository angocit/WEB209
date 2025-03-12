import React from 'react'
import ClientHeader from '../components/client/header'
import ClientFooter from '../components/client/footer'

const ClientLayout = () => {
  return (
    <>
        <ClientHeader/>
        <div>Đây là nội dung giữa trang</div>
        <ClientFooter/>
    </>
  )
}

export default ClientLayout