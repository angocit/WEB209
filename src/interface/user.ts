export interface IUser{
    id?:number|string,
    name?:string,
    email:string,    
    password:string
}
export interface IRegisterForm extends IUser{
    repassword?:string
}