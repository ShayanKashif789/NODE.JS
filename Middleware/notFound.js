export default function notFound(req,res,next) {
const error = new Error('Route not found');
res.status(404);
next(error);
}