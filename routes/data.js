import express from 'express'
import { getData ,getDataById,createData,updateData} from '../Controllers/dataControllers.js';
const router = express.Router();
router.get("/",getData )
router.get("/:id",getDataById )
router.post("/",createData )
router.put('/:id',updateData)
export default router