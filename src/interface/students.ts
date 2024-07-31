export interface IStudent{
    id:number|string;
    name:string;
    age:number;
    email:string;
    phone:string
}
export type FormStudent = Pick<IStudent,'name'|'age'|'email'|'phone'>