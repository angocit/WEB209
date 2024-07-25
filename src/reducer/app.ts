type IAppReducer = {
    isLogin:boolean;
    isRegister:boolean;
    Message:{status:boolean,text?:string}
}
type IAction = {
    type:'register'|'login';
    value:boolean;
    text?:string
}
export const AppReducer = (state:IAppReducer,action:IAction)=>{
    if (action.type=='register'){
        return {...state,isRegister:action.value}
    }
    else if(action.type=='login'){
        return {...state,isLogin:action.value}
    }
    else if(action.type=='message'){
        return {...state,Message:{status:action.value,text:action.text}}
    }
    else {
        return state
    }
}