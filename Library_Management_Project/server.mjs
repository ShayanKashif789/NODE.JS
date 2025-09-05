import http from 'http'
import fs from "fs"
import url from "url"

function readBooks(){
    if(!fs.existsSync("books.json")) return [];
    let data= fs.readFileSync("books.json");
    return JSON.parse(data)
}

const server = http.createServer((req,res)=>{
    const parsedURL = url.parse(req.url,true)
    if(req.url=='/books' && req.method=='GET') {
        const data = readBooks();
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify(data))
    }
    else if(parsedURL.pathname=='/search' && req.method=='GET') {
        const query = parsedURL.query.title.toLowerCase();
        const books = readBooks();
        const searchedBook = books.filter(book=>book.title.toLowerCase().includes(query));
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify(searchedBook))
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"})
    }

})
export default server