import { Button } from 'antd'
import type { IProduct } from '../../interface/product'
import { useContext } from 'react'
import { countCT } from '../../layouts/ClientLayout'

type Props = {
    product:IProduct
}
const ProductItem = ({product}: Props) => {
  const {cartstate,dispath} = useContext(countCT)
  return (
    <div>
              <img src={product.image}/>
              <h3>{product.name}</h3>
              <Button onClick={()=>{
                dispath({type:'addtocart',payload:cartstate.count+1});
                dispath({type:'closeOpen',payload:true});
                }} type="primary">Thêm giở hàng</Button>
   </div>
  )
}

export default ProductItem