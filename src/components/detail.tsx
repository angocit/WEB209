import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import IProduct from '../interface/product';

type Props = {}

const Details = (props: Props) => {
    const params:any = useParams();
    const [product,setProduct]= useState<IProduct>();
    useEffect(()=>{
        const id:number = params.id
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data);
            console.log(data);
            
        })
    },[])
  return (
    <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
            <img src={product?.image}/>
        </div>
        <div className='col-md-6'>
            <h1>{product?.name}</h1>
            <span>{product?.price}</span>
        </div>
        </div>
    </div>
  )
}

export default Details