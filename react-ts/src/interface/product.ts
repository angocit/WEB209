export interface IProduct {
    id: number;
    name: string;
    image: string;
    price: number;
    category: string;
  }
 export type formType = Pick<IProduct,'name'|'price'|'image'|'category'>