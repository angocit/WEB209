import React, { useContext } from 'react'
import { IProduct } from '../../../interface/product'
import StarRating from './starrating'
import {cartContext} from '../../../context/cartContext'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { TypeCart } from '../../../interface/cart'
import { message } from 'antd'

type Props = {
    product:IProduct
}

const ItemProduct = ({product}:Props) => {
  const {dispatch} = useContext(cartContext)
  const addTocart = async(productid:number)=>{
    try {
      const token = localStorage.getItem("token")
      const config = {
          headers: {'Authorization':`Bearer ${token}`}
      }
      const cart = 
        {
          "productId":productid,
          "quantity":1
        }
      
      const {data} = await axios.post(`http://localhost:3000/carts`,cart,config)
        // console.log(data);        
      dispatch({type:TypeCart.updateCart,payload:data.data.Items})
        message.success("Thêm giỏ hàng thành công")
    } catch (error) {
      
  }
  }
  return (
    <div className='item'>
        <Link className='max-h-[250px] block overflow-hidden' to={`/detail/${product.id}`}><img src={product.image}/></Link>
        <h3>{product.name}</h3>
        <span>{product.price}</span>
        <StarRating score={product.rating}/>
        <button className='bg-red-700 text-white px-4 py-1' onClick={()=>addTocart(product.id)}>Add to cart</button>
    </div>
  )
}

export default ItemProduct