import fs from "fs"

export function fileStreamer(filePath,res) {
    if(!fs.existsSync(filePath)) {
        res.writeHead(404);
        res.end("File not found");
        return;
    }
    const readStreams=fs.createReadStream(filePath);
    res.writeHead(200,{"Content-Type":"text/plain"});
    readStreams.on("error",(err)=>{
        res.writeHead(500);
        res.end(`Server error: ${err.message}`)
    })
    readStreams.pipe(res)
}
