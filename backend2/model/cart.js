import mongoose from "mongoose";
const CartSchema = mongoose.Schema({
    userId:{
        type: String
    },
    products: [{
        ProductId: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"products"
        },
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
    }]

},
{
    timestamps:true
}
)
export const Carts = mongoose.model('carts',CartSchema)