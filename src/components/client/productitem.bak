import type { IProduct } from '../../interface/product'

type Props = {
    product:IProduct,
    isEven:boolean,
    sendMessage:(mess:string)=>void
}
const ProductItem = ({product,isEven,sendMessage}: Props) => {
  return (
    <div>
        <img src={product.image}/>
        {(isEven)?<h3>{product.name}</h3>:<h3 className='text-red-600'>{product.name}</h3>}        
        <span>{product.price}</span>
        <button onClick={()=>sendMessage(product.name)}>Gửi tin</button>
    </div>
  )
}

export default ProductItem