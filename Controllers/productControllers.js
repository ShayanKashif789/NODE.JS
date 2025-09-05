import { products } from "../Data/product.js";

export const getProducts=(req,res,next)=>{
  try{
    let limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit>0) {
      return  res.status(200).json(products.slice(0,limit))
    }
    res.json(products)
  }
  catch(err) {
    return next(err);
  }
}
export const getProductById=(req,res,next)=>{
  try{
    const id = parseInt(req.params.id);
    const response=products.find(p=>p.id===id);
    if(!response) {
       const error = new Error("Data not found");
       error.status=404;
       return next(error)
    }
     res.status(200).json(response);
  }
  catch(err) {
    return next(err)
  }
}
export const createProducts=(req,res,next)=>{
  try{
  const{id,name,price,category,stock} = req.body;
  if(!id || !name || !price || !category || !stock) {
    const error = new Error("All fields are required");
       error.status=400;
       return next(error)
  }
  if(products.find(p=>p.id===id)) {
    const error = new Error(`Product with id ${id} already exists`);
       error.status=400;
       return next(error)
  }
  const data = {id,name,price,category,stock};
  products.push(data);
  return res.status(201).json({message:"Data added successfully",data:data})
}
catch(err) {
  return next(err)
}
}