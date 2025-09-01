import http from 'http'
import { fileStreamer } from './FileStreams.mjs'

const port=3000;
const filePath = "StreamDataToClient/heavyFile.txt";
console.log(filePath)
const server=http.createServer((req,res)=>{
    if(req.url==='/file') {
        fileStreamer(filePath,res)

    }
    else{
        res.writeHead(404);
        res.end("Not found");
    }
})
server.listen(port,()=>{
    console.log(`Server is running on the PORT ${port}`)
})