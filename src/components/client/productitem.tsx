import type { IProduct } from '../../interface/product'

type Props = {
    product:IProduct,
    isEven:boolean,
    index?:number,
    sendMessage:(mess:string)=>void
}
const ProductItem = ({product,index,isEven,sendMessage}: Props) => {
  // if (!isEven) return;
  // if (!isEven) return (
  //   <div>
  //       <img src={product.image}/>
  //       <span>{product.price}</span>
  //       {(isEven)?<h3>{product.name}</h3>:<h3 className='text-red-600'>{product.name}</h3>}        
  //       <button onClick={()=>sendMessage(product.name)}>Gửi tin</button>
  //   </div>
  // )
  // else 
  // return (
  //   <div>
  //       <img src={product.image}/>
  //       {(isEven)?<h3>{product.name}</h3>:<h3 className='text-red-600'>{product.name}</h3>}        
  //       <span>{product.price}</span>
  //       <button onClick={()=>sendMessage(product.name)}>Gửi tin</button>
  //   </div>
  // )
  // // Toán tử 3 ngôi
  // return (
  //   <div>
  //        <img src={product.image}/>
  //       {(isEven)?<h3>{product.name}</h3>:<h3 className='text-red-600'>{product.name}</h3>}        
  //       <span>{product.price}</span>
  //        <button onClick={()=>sendMessage(product.name)}>Gửi tin</button>
  //   </div>
  // )
   // Toán tử 3 ngôi lồng nhau
  return (
    <div>
         <img src={product.image}/>
        {(index==1)?<h3 className='text-yellow-500'>{product.name}</h3>:(index==2)?<h3 className='text-red-600'>{product.name}</h3>:<h3 className='text-blue-600'>{product.name}</h3>}        
        <span>{product.price}</span>
         <button onClick={()=>sendMessage(product.name)}>Gửi tin</button>
    </div>
  )
}

export default ProductItem