import type { ICartStore } from "../interface/carttype";

export const CartReducerFn = (state:ICartStore,action:any)=>{
    switch(action.type){
        case 'addtocart':
            console.log(action.payload);            
            return {...state,count:action.payload}
        case 'closeOpen':
            return {...state,isCloseSidebar:action.payload}
        default:
            console.log(action.payload); 
            return state
    }
}