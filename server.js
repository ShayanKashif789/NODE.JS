import express from "express";
import dataRouter from './routes/data.js'
import productRouter from "./routes/product.js"
import errorHandler from "./Middleware/erroHandler.js";
import notFound from "./Middleware/notFound.js";
//parsing req.body
const app=express();
app.use(express.json());
app.use("/data",dataRouter)
app.use("/products",productRouter)

app.use(notFound)
app.use(errorHandler)

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server is listening on the PORT ${PORT}`)
})