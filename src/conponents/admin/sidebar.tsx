import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-1/5 bg-white h-screen p-4 [&_*]:text-[1.1rem] [&_*]:font-[600]'>
        <ul>
            <li>
                <Link to={'/dashboard/add-product'}>Thêm mới danh mục</Link>
            </li>
            <li>
                <Link to={'/dashboard/add-product'}>Thêm mới sản phẩm</Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar