import { Carts } from "../model/cart.js"
export const getCartById =async (req,res)=>{
    try {
        const id = req.params.id
        const result = await Carts.findOne({_id:id}).populate('products.ProductId')
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}
export const AddCart =async (req,res)=>{
    try {
        const body = req.body
        const cart = new Carts(body)
        const result = await cart.save()
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}
export const UpdateCart =async (req,res)=>{
    try {
        const id = req.params.id
        const body = req.body
        const result = await Carts.findOneAndUpdate({_id:id},body,{new:true})
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}
export const getCartByUser = async (req,res)=>{
    try {
        const userId = req.params.userid
        const result = await Carts.findOne({userId:userId})
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}
export const DeleteCart = async (req,res)=>{
    try {
        const id = req.params.id
        const result = await Carts.deleteOne({_id:id})
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}