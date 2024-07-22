import React, { Fragment, useContext, useEffect, useState } from 'react'
import CartTable from '../components/cartTable'
import { api } from '../../../config/axios'
import { cartCT } from '../../../context/cartcontext'
import { useForm } from 'react-hook-form';

interface ICartDetail {
    _id: string;
    userId: string;
    products: Product[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  interface Product {
    ProductId: string;
    quantity: number;
    variants: any[];
    _id: string;
  }
interface FormCheckOut {
  fullname: string;
  phone_shipping:string;
  address_shipping:string;
  payment_method: string|number;
  shipping_method: string|number;
}
const Checkout = () => {
  const {register,handleSubmit,reset} = useForm<FormCheckOut>()
    const {cart,setCart} = useContext(cartCT)   
    const [subtotal,setSubTotal] = useState<number>(0)
    const [quantity_total,setQuantityTotal] = useState<number>(0)
    const [shipping_fee,setShipping_fee] = useState<number>(0)
    const [cartdetail,setCartdetail] = useState<ICartDetail>()   
      useEffect(()=>{
        if (cart._id){
        (async ()=>{
            try {
                const {data} = await api.get(`cart/${cart._id}`)
                console.log(data);
                const total = data.products.reduce((sum:{subtotal: number,quantity: number},product:any)=>{
                    sum.subtotal += product.ProductId.price*product.quantity
                    sum.quantity += product.quantity
                    return sum
                },{subtotal: 0,quantity: 0})
                setCartdetail(data)
                setSubTotal(total.subtotal)
                setQuantityTotal(total.quantity)
            } catch (error) {
              
            }
        })()
        }
      },[cart])
    const onSubmit = async (data:FormCheckOut)=>{
      console.log(data);
      console.log(cartdetail);
      const products = cartdetail?.products.map((item:any)=>{
        return {
          id:item.ProductId._id,
          name:item.ProductId.name,
          image:item.ProductId.image,
          price:item.ProductId.price,
          quantity: item.quantity,
          variants: item.ProductId.variants
        }
      })
      const order = {
        userId:1,
        name_shipping:data.fullname,
        address_shipping: data.address_shipping,
        phone_shipping: data.phone_shipping,
        subtotal:subtotal,
        shipping_fee:shipping_fee,
        total:shipping_fee+subtotal,
        products: products,
        status:'Đang xử lý'
      }
      try {
        const {data} = await api.post('/order',order)
        api.delete(`cart/${cart._id}`)
        console.log(data);
        setCart({})    
        alert('Đặt hàng thành công')    
      } catch (error) {
          console.log(error);
          
      }
    }
    const changeShippingMethod = (data:FormCheckOut)=>{
       if (data.shipping_method==2){
          setShipping_fee(20000)
       }else {
        setShipping_fee(0)
       }        
    }
    if (cart._id){
      return (
        <>
       <h1>Giỏ hàng của bạn</h1>
       {(cartdetail)&&<CartTable edit={false} cartdetail={cartdetail}/>}
       <div className='flex flex-col'>
          <span>Tổng sản phẩm: {quantity_total}</span>
          <span>Tạm tính: {subtotal}</span>
          <span>Phí vận chuyển: {shipping_fee}</span>
          <span>Tổng tiền: {shipping_fee+subtotal}</span>
       </div>
        <h2 className='text-center text-[24px] my-6'>Nhập thông tin checkout.</h2> 
        <form className='flex flex-col gap-2' onChange={handleSubmit(changeShippingMethod)} onSubmit={handleSubmit(onSubmit)}>
          <label>Họ tên</label>
            <input className='border border-solid' type='text' {...register('fullname',{required:true})}/>
            <label>Địa chỉ</label>
            <input className='border border-solid' type='text' {...register('address_shipping',{required:true})}/>
            <label>Số điện thoại</label>
            <input className='border border-solid' type='text' {...register('phone_shipping',{required:true})}/>
            <label>Phương thức thanh toán</label>
            <select className='border border-solid' {...register('payment_method',{required:true})}>
                <option value={1}>Chuyển khoản ngân hàng</option>
                <option value={2}>COD - Trả tiền khi nhận hàng</option>
            </select>
            <label>Phương thức vận chuyển</label>
            <select className='border border-solid' {...register('shipping_method',{required:true})}>
                <option onSelect={()=>alert('1')} value={1}>Tiêu chuẩn</option>
                <option  onSelect={()=>alert('2')} value={2}>Vận chuyển nhanh</option>                
            </select>
            <button type='submit' className='bg-slate-900 text-white py-2 px-6 mr-0'>Hoàn tất đơn hàng</button>
        </form>
        </>
      )
    }
    else {
      return <>Vui lòng đặt hàng</>
    }
}

export default Checkout