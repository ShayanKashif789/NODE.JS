import { data } from "../Data/data.js";

export const getData = (req, res, next) => {
    try {
        let limit = parseInt(req.query.limit);
        if (!isNaN(limit) && limit > 0) {
            return res.status(200).json(data.slice(0, limit))
        }
        res.status(200).json(data)
    } catch (err) {
        next(err)
    }
}
export const getDataById = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const response = data.find(d => d.id === id);
        if (!response) {
            const error = new Error("Data not found");
            error.status = 404;
            return next(error)
        }
        res.json(response);
    }
    catch (err) {
        next(err)
    }
}
export const createData = (req, res, next) => {
    try {
        const { name, id } = req.body;
        if (!name || !id) {
            const error = new Error("All fields are required");
            error.status = 400;
            return next(error)
        }
        if (data.find(d => d.id === id)) {
            const error = new Error(`Data with id ${id} already exists`);
            error.status = 400;
            return next(error);
        }
        const input = { name, id };
        data.push(input)
        return res.status(201).json({ message: "Data added successfully", data: input });
    } catch (err) {
        return next(err);
    }
}
export const updateData = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const result = data.find(d => d.id === id);
        if (!result) {
            const error = new Error("Data not found");
            error.status = 404;
            return next(error)
        }
         result.name= req.body.name;
        res.status(200).json(data)
    }
    catch(err) {
        next(err);
    }
}