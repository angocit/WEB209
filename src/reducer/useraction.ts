export interface IUserReducer{
    isLogin:boolean;
    isRegister:boolean;
}
export interface IUserAction {
    type:string;
    value:boolean
}
export const UserReducer = (state:IUserReducer,action:IUserAction)=>{
    if (action.type=='login'){
        return {...state,isLogin:action.value}
    }
    else if (action.type=='register'){
        return {...state,isRegister:action.value}
    }
    else {
        return state
    }
}