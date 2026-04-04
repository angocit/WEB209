import { useEffect, useState } from "react"
import { jwtDecode, type JwtPayload } from "jwt-decode";
export const useAuth = ()=>{
    const [isLogin,setLogin] = useState<boolean>(false)
    const [isAdmin,setAdmin] = useState<boolean>(false)
    const [isLoading,setLoading] = useState<boolean>(true)
    useEffect(()=>{
        const token = sessionStorage.getItem('token')
        if(token){
            const decoded = jwtDecode<JwtPayload>(token);
            // console.log(decoded);   
            const now = Date.now()/1000
            if (decoded.exp&&decoded.exp>now){
                setLogin(true)
                if (decoded.sub=='1'){
                    setAdmin(true)
                }
                setLoading(false)
            }         
        }
    },[])
    return {isLogin,isAdmin,isLoading}
}