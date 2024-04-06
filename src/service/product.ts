import axios from 'axios';
import {axiosservice} from '../config/axiosconf'
import { IProductLite } from '../interface/product';

export const getAllProduct = async()=>{
try {
    const {data} = await axiosservice.get('/products');
    console.log(data);
    
    return data;
} catch (error) {
    console.log(error);
    
}
}   
export const getProductByID = async(id:string)=>{
    try {
        const {data} = await axiosservice.get(`/products/${id}`);
        return data;
    } catch (error) {
        console.log(error);
        
    }
} 
export const addProduct = async(product:IProductLite)=>{
    try {
        const {data} = await axiosservice.post(`/products`,product);
        return data;
    } catch (error) {
        console.log(error);    
    }
}
export const UpdateProduct = async(pid:string,product:IProductLite)=>{
    try {
        const {data} = await axiosservice.put(`/products/${pid}`,product);
        return data;
    } catch (error) {
        console.log(error);    
    }
}
export const DeleteProduct = async(pid:string)=>{
    try {
        const {data} = await axiosservice.delete(`/products/${pid}`);
        return data;
    } catch (error) {
        console.log(error);    
    }
}
export const UploadImageProduct = async (formdata:any)=>{
    try {
        const {data} = await axiosservice.post(`/files/upload`,formdata);
        return data;
    } catch (error) {
        console.log(error);    
    }
}
export const UploadImageProductToCloudinary = async (formdata:any)=>{
    try {
        const {data} = await axios.post(`https://api.cloudinary.com/v1_1/dyzal5ujh/upload`,formdata);
        return data;
    } catch (error) {
        console.log(error);    
    }
}