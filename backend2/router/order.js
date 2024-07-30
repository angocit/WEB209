import express from "express"
import { AddNewOrder } from "../controllers/order.js";
const router = express.Router();
router.post('/',AddNewOrder)
export default router