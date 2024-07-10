import React from 'react'
import { formType, IProduct } from '../interface/product'
import { useForm } from 'react-hook-form'

type Props = {
    product:IProduct,
    onEdit:(data:formType)=>void,
    setFlag:(id:string|number)=>void
}

const EditProduct = ({product,onEdit,setFlag}: Props) => {
    const {register,handleSubmit,reset} = useForm<formType>({
        defaultValues: {
            name: product.name,
            image: product.image,
            price: product.price,
            category: product.category
          }
    })
    const onSubmitUpdate = (product:formType)=>{
        onEdit(product)
    }
  return (
    <div className='bg'>
                        <form onSubmit={handleSubmit(onSubmitUpdate)}>
                          <input type='text' {...register("name")} placeholder='Tên sản phẩm'/>
                          <input type='text' {...register("image")} placeholder='Ảnh sản phẩm'/>
                          <input type='number' {...register("price")} placeholder='Giá sản phẩm'/>
                          <input type='text' {...register("category")} placeholder='Danh mục'/>
                          <button type='submit'>Update</button>  
                          <button type='button' onClick={()=>setFlag(0)}>Hủy</button>  
                      </form> 
                  </div>
  )
}

export default EditProduct