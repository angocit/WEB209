import React, { useEffect, useState } from "react";
import {IProduct} from "../interface/product";
import Addtocart from "./addtocart";
import { Link } from "react-router-dom";

type Props = {
};

const Productlist = (props: Props) => {
  const [status,setStatus] = useState(true)
    const [load,setLoad] = useState(true)
    const [products,setProduct] = useState([])
    const [page,setPage] =  useState(1)
const handleClick = ()=>{
    setStatus(!status)
}
const buttonClick =()=>{
    setPage(page+1)
}
const buttonClickprev =()=>{
    setPage(page-1)
}
  useEffect(()=>{
    // console.log(`Click ${load}`); 
    fetch(`https://dummyjson.com/products?skip=${(page-1)*9}&limit=9`)
    .then((res)=>res.json()).then((data)=>{
        setProduct(data.products);        
    });    
  },[page])
  return (
    <div className="container">
      <div className="row">
    {/* <div style={{background:(status)?"red":"blue",width:100,height:100}} onClick={handleClick}></div> */}
    {products.map((product:any)=>{
        return (
          <div className="col-12 col-sm-4 col-md3">
            <img src={product.thumbnail}/>
            <h3><Link to={'/details/'+product.id}>{product.title}</Link></h3>
            <span>{product.price}</span>
            <p><Addtocart pid={product.id}/></p>
          </div>
        )
    })}
    </div>
    <button type="button" onClick={buttonClickprev}>Prev page</button>
    <button type="button" onClick={buttonClick}>Next page</button>    
    </div>
  )
};
export default Productlist;

{
  /* <div className="item col-6 col-sm-4 col-md-3">
          <img src="https://img.muji.net/img/item/4550344275726_1260.jpg"/>
          <h3>Sản phẩm số 1</h3>
          <span>1000</span>
      </div> */
}
