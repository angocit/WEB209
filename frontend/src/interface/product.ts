export interface IProduct {
    _id:number|string
    name: string;
    image: string;
    price: number;
    description: string;
}
export type ProductForm = Pick<IProduct,'name'|'price'|'description'|'image'>