import express from "express"
import { getProducts,getProductById,createProducts } from "../Controllers/productControllers.js";
const router = express.Router();
router.get("/",getProducts)
router.get("/:id",getProductById)
router.post("/",createProducts)
export default router 