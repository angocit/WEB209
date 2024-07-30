import mongoose from "mongoose";
const OrderSchema = mongoose.Schema({
    userId:{
        type: String
    },
    name_shipping: String,
    address_shipping: String,
    phone_shipping: String,
    subtotal:Number,
    shipping_fee:Number,
    total:Number,
    products: [{
        id:mongoose.Schema.Types.ObjectId,
        name: String,
        image:String,
        price:Number,
        quantity: Number, 
        variants:[{
            size: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'size'
            },
            color: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'color'
            },
            quantity:Number
        }]
    }],
    status:String  //Có thể lấy theo ID của collect status để xác định trạng thái như là đang xử lý, đang vận chuyển, hay đã hoàn thành
},
{
    timestamps:true
}
)
export const Order = mongoose.model('orders',OrderSchema)