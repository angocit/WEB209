import mongoose from "mongoose";
const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    price: Number,
    description: String
},
{
    timestamps:true
}
)
export const Product = mongoose.model('products',ProductSchema)