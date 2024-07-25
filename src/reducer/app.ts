type IAppReducer = {
    isLogin:boolean;
    isRegister:boolean;
    Message:{status:boolean,message?:{type?:string,text?:string}}
}
type IAction = {
    type:'register'|'login';
    value:boolean;
    message?:{type?:string,text?:string}

}
export const AppReducer = (state:IAppReducer,action:IAction)=>{
    if (action.type=='register'){
        return {...state,isRegister:action.value}
    }
    else if(action.type=='login'){
        return {...state,isLogin:action.value}
    }
    else if(action.type=='message'){
        return {...state,Message:{status:action.value,message:{type:action.message?.type,text:action.message?.text}}}
    }
    else {
        return state
    }
}