import axios from 'axios'
import React from 'react'

type Props = {}

const DetailProduct = (props: Props) => {
    const addToCart =(cartdata)=>{
        //Lấy token
        const token = localStorage.getItem("token")
        const config = {
            headers: {"Authorization":"Bearer "+token}
        }
        const {data} = axios.post("API giỏ hàng",cartdata,config)
    }
  return (
    <div>
        <h1>THông tin mô tả sản phẩm</h1>
        <form>
            có 2 input chứa productId và quantity
        </form>
        </div>
  )
}

export default DetailProduct