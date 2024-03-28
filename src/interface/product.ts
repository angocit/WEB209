export interface IProduct{
  id:string;
  name:string;
  image:string;
  price:number
}
export type IProductLite = Pick<IProduct,'name'|'image'|'price'>