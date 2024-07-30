import {Product} from '../model/product.js'
export const GetAllProduct = async (req,res)=>{
    const product = await Product.find()
    res.send(product)
}
export const AddCategory =async (req,res)=>{
    try {
        const body = req.body
        const category = new Category(body)
        const result = await category.save()
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}
export const AddProduct =async (req,res)=>{
    try {
        const body = req.body
        const product = new Product(body)
        const result = await product.save()
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}
export const GetProductById = async(req,res)=>{
    try {
        const productid =  req.params.id
        const product = await Product.findById(productid)
        res.send({status:true,data:product})
    } catch (error) {
        res.send({status:false,data:error})
    }
}