import React from 'react'
import IProduct from '../../interface/product'

type Props = {
    products:IProduct[]
}

const ProductList = ({products}:Props) => {
  return (
    <table>
        <thead>
            <tr>
                <th>STT</th>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá tiền</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product:IProduct,index:number)=>{
                return (
                    <tr>
                        <td>{index+1}</td>
                        <td><img src={product.image}/></td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><a href={`/edit/${product.id}`}>Sửa</a><button>Xóa</button></td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}

export default ProductList