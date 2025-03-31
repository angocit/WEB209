import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {cartContext} from '../../context/cartContext'
import { ICartProduct, TypeCart } from '../../interface/cart'
import axios from 'axios'
const ClientHeader = () => {
    const {cartstate,dispatch} = useContext(cartContext)
    useEffect(()=>{
        (async()=>{
            try {
                const token = localStorage.getItem("token")
                const config = {
                    headers: {'Authorization':`Bearer ${token}`}
                }
                const {data} = await axios.get(`http://localhost:3000/carts`,config)
                dispatch({type:TypeCart.updateCart,payload:data.data.Items})
            } catch (error) {
                
            }
        })()
    },[])
  return (
    <header className='bg-green-950 text-white'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
            <div className='logo'>LOGO</div>
            <div className='flex items-center w-full justify-between'>
                <form className='ml-10 relative'>
                    <input className='text-black border outline-none px-3 py-1 rounded w-[300px]' type='text' placeholder='Tìm kiếm'/>
                    <button className='absolute right-2 top-2'>
                    <svg className='w-5 h-5' fill='#999' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </button>
                </form>
            <nav>
                <ul className='flex gap-4 py-6'>
                    <li><Link to={'#'}>Trang chủ</Link></li>
                    <li><Link to={'#'}>Giới thiệu</Link></li>
                    <li><Link to={'#'}>Shop</Link></li>
                    <li><Link to={'#'}>Tin tức</Link></li>
                    <li><Link to={'#'}>Liên hệ</Link></li>
                    <li><Link to={'#'}>Giỏ hàng ({cartstate.carts.reduce((total:any,item:ICartProduct)=>total+item.quantity,0)})</Link></li>
                </ul>
            </nav>
            </div>
        </div>
    </header>
  )
}

export default ClientHeader