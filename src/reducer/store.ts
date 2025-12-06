import { StoreType } from "../types/storetype"

type StateType = {
    theme:boolean,
    cart:number
}

export const storeReducer = (state:StateType,action:{type:StoreType,payload:any})=>{
    switch(action.type){
        case StoreType.ChangeTheme:
            return {...state,theme:action.payload}
        case StoreType.increase:
            return {...state,cart:state.cart+action.payload}
        case StoreType.decrease:
            return {...state,cart:state.cart-action.payload} 
        default:
            return state   
    }
}