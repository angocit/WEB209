import React from 'react'
import IProduct from '../../interface/product'
import { ToastContainer, toast } from 'react-toastify';
type Props = {
    products:IProduct[],
    setProduct: (data:IProduct[])=>void
}

const ProductList = ({products,setProduct}:Props) => {    
    const delProduct = (id:string)=>{
    //    let mess = confirm('Are you sure?') 
    //    if (mess){
        fetch(`http://localhost:3000/products/${id}`,{method: 'DELETE'})
        .then(response=>response.json())
        .then((data:IProduct)=>{
            const newproducts = products.filter((product:IProduct)=>product.id!==id)
            setProduct(newproducts)
            toast.warning("Xóa thành công");
        })
        .catch((error:any)=>{
            console.log(`Looix ${error}`);
            
        })
    // }
    }
  return (
    <table>
        <thead>
            <tr>
                <th>STT</th>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá tiền</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product:IProduct,index:number)=>{
                return (
                    <tr>
                        <td>{index+1}</td>
                        <td><img src={product.image}/></td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><a href={`/dashboard/product/edit/${product.id}`}>Sửa</a><button onClick={()=>{delProduct(product.id)}}>Xóa</button></td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}

export default ProductList