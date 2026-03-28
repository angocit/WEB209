import { Button } from 'antd'
import type { IProduct } from '../../interface/product'
import { useContext } from 'react'
import { countCT } from '../../layouts/ClientLayout'

type Props = {
    product:IProduct
}
const ProductItem = ({product}: Props) => {
  const {count,setCount} = useContext(countCT)
  return (
    <div>
              <img src={product.image}/>
              <h3>{product.name}</h3>
              <Button onClick={()=>setCount(count+1)} type="primary">Thêm giở hàng</Button>
   </div>
  )
}

export default ProductItem