import { UploadFile } from "antd";

export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
  gallerys:string[],
  category:number;
  parent: number;
  rating:number
}