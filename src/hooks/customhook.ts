import axios from "axios"
import { useEffect, useState } from "react"

export const useQueryCustom =<T>(url:string):{data:T[],isLoading:boolean}=>{
    const [isLoading,setLoading] = useState<boolean>(false)
    const [datas,setData] = useState<T[]>([])
    useEffect(()=>{
        setLoading(true);
        (async()=>{
            try {
                const {data} = await axios.get(url)
                setData(data)
                setLoading(false)
            } catch (error) {
                
            }            
        })()
    },[url])
    return {data:datas,isLoading}
}