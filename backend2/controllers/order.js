import { Order } from "../model/order.js"
export const AddNewOrder = async (req,res)=>{
    try {
        const body = req.body
        const order = new Order(body)
        const orderres = await order.save()
        res.send(orderres)
    } catch (error) {
        res.send(error)
    } 
}