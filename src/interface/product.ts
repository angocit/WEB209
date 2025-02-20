export interface IProduct {
  id?: number|string;
  name: string;
  image:string;
  price: number;
  category:string
}
export interface ICategory{
  id?:number|string,
  name:string,
  image:string
}