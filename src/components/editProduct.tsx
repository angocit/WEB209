import React from 'react'
import { useForm } from 'react-hook-form'
import { IProduct,FormData } from '../interface/product'

type Props = {
    product:IProduct;
    setFlag:(flag:number|string)=>void;
    onUpdate:(data:FormData)=>void
}

const EditProduct = ({product,setFlag,onUpdate}: Props) => {
    const {register,handleSubmit,reset} = useForm<FormData>({
            defaultValues: {
                name:product.name,
                image:product.image,
                price:product.price,
                category:product.category
            }
        }
    )
    const onSubmit = (data:FormData)=>{
        onUpdate(data)
        setFlag(0)
    }
  return (
    <>
    <div id='popup'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' {...register("name")}/>
                <input type='text' {...register("image")}/>
                <input type='text' {...register("category")}/>
                <input type='number' {...register("price")}/>
                <button type='submit'>Cập nhật sản phẩm</button>
                <button type='button' onClick={()=>setFlag(0)}>Hủy</button>
                </form>
                </div>
    </>
  )
}

export default EditProduct