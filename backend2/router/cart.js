import { AddCart, getCartById, getCartByUser, UpdateCart,DeleteCart } from "../controllers/cart.js"
import express from "express"
const router = express.Router();
router.get('/userid/:userid',getCartByUser)
router.get('/:id',getCartById)
router.post('/',AddCart)
router.put('/:id',UpdateCart)
router.delete('/:id',DeleteCart)
export default router