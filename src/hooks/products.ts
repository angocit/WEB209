import { useEffect, useState } from "react"
import { IProduct } from "../interface/product"
import { api } from "../services/data"

export const useProducts = (route:string)=>{
    const [data,setData] = useState<IProduct[]>([])
    const [isLoading,setLoading] = useState<boolean>(false)
    const [isError,setError] = useState<boolean>(false)
    useEffect(()=>{       
       (async()=>{
        try {
            setLoading(true);
            const {data:products} = await api.get(route)
            setData(products)
            setLoading(false)
        } catch (error) {
            setError(true)
        }
       })()
    },[route])
    return {data,isLoading,isError}
}