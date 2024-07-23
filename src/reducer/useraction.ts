export interface IUserReducer{
    isLogin:boolean;
    isRegister:boolean;
}
export interface IUserAction {
    type:string;
    payload: {value:boolean}
}
export const UserReducer = (state:IUserReducer,action:IUserAction)=>{
    if (action.type=='login'){
        return {...state,isLogin:action.payload.value}
    }
    else if (action.type=='register'){
        return {...state,isRegister:action.payload.value}
    }
    else {
        return state
    }
}