import React, { useContext, useEffect } from 'react'
import { cartCT } from '../../../context/cartcontext'
import { api } from '../../../config/axios'
import { IProduct } from '../../../interface/product'
type Props = {
    product:IProduct
}

const ProductItem = ({product}: Props) => {
  const {cart,setCart} = useContext(cartCT) // cart = {}
  const addToCart = async (id:number|string)=>{  
    // 2 trường hợp xảy ra. Giỏ hàng đã tồn tại, và chưa tồn tại (cart = {})
    if (cart._id){ //Giỏ hàng tồn tại
      const findproduct = cart.products.find((item:any)=>item.ProductId==id)  // Tìm sản phẩm có ID thêm vào có trong giỏ hàng hay không
      if (findproduct) // Nếu tìm thấy
      {
        // Thay đổi số lượng trong mảng products của giỏ hàng
        const products = cart.products.map((item:any)=>{
          if (item.ProductId==id)
          {
          item.quantity = item.quantity+1
          }
          return item
        })
        cart.products = products  // Set lại danh sách sản phẩm trong giỏ hàng
      }
      else { // Không tìm thấy sản phẩm trong giỏ hàng
        cart.products = [...cart.products,{ProductId:id,quantity:1}] // Bổ sung vào mảng sản phẩm hiện có trong giỏ hàng 1 sản phẩm có slg = 1
      }
        const {data} = await api.put('cart/'+cart._id,cart) // Lưu lại thông tin giỏ hàng vào DB
        setCart(data)  // Đặt lại state giỏ hàng
        alert('thêm giỏ hàng thành công')
    }
    else { // Giỏ hàng chưa tồn tại
      const newcart = {userId:1,products:[{ProductId:id,quantity:1}]}
      const {data} = await api.post('cart',newcart) // Lưu thông tin giỏ hàng vào DB
      setCart(data)
      alert('thêm giỏ hàng thành công')
    }
  }
  return (
    <>
    <div key={product._id} className='relative product-item flex flex-col border border-solid border-[#eee]'>
        <div className='h-[350px] overflow-hidden'>
            <img className='h-full mx-auto object-cover hover:scale-110 duration-500' src={product.image}/>
        </div>
        <h3 className='w-full py-2 text-[#665345] font-semibold text-[14px] px-4 my-4'>{product.name}</h3>
        <div className='flex justify-between px-4 pb-2'>
            <span>{product.price}</span>
        </div>
        <button onClick={()=>addToCart(product._id)}>Add to cart</button>
    </div>
    </>
  )
}

export default ProductItem