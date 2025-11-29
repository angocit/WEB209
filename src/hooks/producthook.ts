import axios from "axios"
import { useEffect, useState } from "react"

const useProduct = <T>(api:string):[data:T[],isLoading:boolean,isError:boolean] => {
    const [data,setData] = useState<T[]>([])
    const [isLoading,setLoading] = useState<boolean>(false)
    const [isError,setError] = useState<boolean>(false)
    useEffect(()=>{
        //IIFE
        (async ()=>{
            setLoading(true)
            try {
                const {data:products} = await axios.get(api)
                setData(products)
                 setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        })()
    },[api])
    return [data,isLoading,isError]
}

export default useProduct