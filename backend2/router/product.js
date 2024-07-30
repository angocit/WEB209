import express from 'express';
import {AddProduct, GetAllProduct,GetProductById} from '../controllers/product.js'
const router = express.Router();
router.get('/products',GetAllProduct)
router.get('/products/:id',GetProductById)
router.post('/products',AddProduct)
export default router