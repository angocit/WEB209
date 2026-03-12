import type { IProduct } from '../../interface/product'

type Props = {
    product:IProduct,
    isEven:boolean
}
const ProductItem = ({product,isEven}: Props) => {
  return (
    <div>
        <img src={product.image}/>
        {(isEven)?<h3>{product.name}</h3>:<h3 className='text-red-600'>{product.name}</h3>}        
        <span>{product.price}</span>
    </div>
  )
}

export default ProductItem