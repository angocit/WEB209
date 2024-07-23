type IAppReducer = {
    isLogin:boolean;
    isRegister:boolean;
}
type IAction = {
    type:'register'|'login';
    value:boolean
}
export const AppReducer = (state:IAppReducer,action:IAction)=>{
    if (action.type=='register'){
        return {...state,isRegister:action.value}
    }
    else if(action.type=='login'){
        return {...state,isLogin:action.value}
    }
    else {
        return state
    }
}