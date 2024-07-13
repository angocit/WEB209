import api from "../config/axios";
import { FormData } from "../interface/product";

export const GetAllProducts = async ()=>{
    try {
        const {data} = await api.get("products")
        return data
    } catch (error) {
        console.log(error);        
    }
}
export const GetProductByID = async (id:number|string)=>{
    try {
        const {data} = await api.get(`products/${id}`)
        return data
    } catch (error) {
        console.log(error);        
    }
}
export const AddProduct = async (productData:FormData)=>{
    try {
        const {data} = await api.post(`products`,productData)
        return data
    } catch (error) {
        console.log(error);        
    }
}
export const UpdateProduct = async (productData:FormData,id:number|string)=>{
    try {
        const {data} = await api.put(`products/${id}`,productData)
        return data
    } catch (error) {
        console.log(error);        
    }
}
export const DeleteProduct = async (id:number|string)=>{
    try {
        const {data} = await api.delete(`products/${id}`)
        return data
    } catch (error) {
        console.log(error);        
    }
}