export interface IUserReducer{
    isLogin:boolean;
    isRegister:boolean;
    Message:{status:boolean,text?:string,type?:boolean}
}
export interface IUserAction {
    type:'login'|'register'|'message';
    value:boolean;
    text?:string;
    messtype?:boolean
}
export const UserReducer = (state:IUserReducer,action:IUserAction)=>{    
    if (action.type==='login'){
        return {...state,isLogin:action.value}
    }
    // else if (action.type==='register'){
    //     return {...state,isRegister:action.value}
    // }
    else if (action.type==='message'){
        console.log('sdfsd0',action);
        return {...state,Message:{status:action.value,text:action.text,type:action.messtype}}
    }
    else {
        return state
    }
}