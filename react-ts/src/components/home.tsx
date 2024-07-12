import React from 'react'
import { IProduct } from '../interface/product'

type Props = {
  products:IProduct[]
}

const Home = ({products}: Props) => {
  return (
    <>
      <table>
        <thead>
        <tr>
          <th>STT</th>
          <th>Ảnh</th>
          <th>Tên sản phẩm</th>
          <th>Giá tiền</th>
          <th>Thao tác</th>
        </tr>
        </thead>
        <tbody>
          {products.map((product,index)=>(
            <tr key={product.id}>
                <td>{index+1}</td>
                <td><img width={90} src={product.image}/></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><button>Sửa</button><button>Xóa</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Home