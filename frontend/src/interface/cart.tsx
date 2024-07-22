export interface ICart{
    _id:number|string;
    userId:number|string;
    products:[
      {
        ProductId:number|string;
        quantity?:number;
        variants?:[
            {
            size:number|string;
            color:number|string;
            quantity:number
            }
        ]
      }
    ]
 }