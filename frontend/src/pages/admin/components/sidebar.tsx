import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <aside className='row-start-1 row-end-3 min-h-screen bg-gray-800 text-white'>
        <h3>Dashboard</h3>
        <ul className='flex flex-col'>
            <li>
                <NavLink to={'/dashboard/products'}>Products</NavLink>                
            </li>
            <li>
            <NavLink to={'/dashboard/product/add'}>Add Product</NavLink>              
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar