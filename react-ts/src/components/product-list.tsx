import React, { useContext } from 'react'
import { IProduct } from '../interface/product'
import { Link } from 'react-router-dom'
import { productCT } from '../context/productContext'

const ProductList = () => {
    const {products,onDelete} = useContext(productCT)
  return (
    <>
    <h1>Danh sách sản phẩm</h1>
    <table>
        <thead>
            <tr>
                <th>STT</th>
                <th>Ảnh SP</th>
                <th>Tên SP</th>
                <th>Giá tiền</th>
                <th>Thao tác</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product:IProduct,index:number)=>(
                <tr key={product.id}>
                    <td>{index+1}</td>
                    <td><img width={90} src={product.image}/></td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><Link to={`/product/edit/${product.id}`}>Sửa</Link><button onClick={()=>onDelete(product.id)}>Xóa</button></td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default ProductList