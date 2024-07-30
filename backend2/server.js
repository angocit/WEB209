import express from 'express'
import productRouter from './router/product.js'
import uploadRouter from './router/upload.js'
import cartRouter from './router/cart.js'
import orderRouter from './router/order.js'
import http from 'http'
import mongoose from 'mongoose'
import { Server } from 'socket.io'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
const port = 8000
const connectdb = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/tutorial')
        console.log('Connect db successfully');
    } catch (error) {
        console.log('Can not connect to DB');
    }
}
app.listen(port, async ()=>{
    await connectdb()
    console.log(`Endpoint: http://localhost:${port}`);
})