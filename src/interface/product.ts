export interface IProduct {
    id:number;
    name: string;
    image: string;
    price: number;
    category: string;
  }
  export type FormData = Pick<IProduct,'name'|'image'|'price'|'category'>
  export interface ICategory{
    id:number|string,
    name:string
  }