export interface IProduct {
  id: number;
  name: string;
  image:string;
  price: number;
}
export type TProduct = Omit<IProduct,"id">