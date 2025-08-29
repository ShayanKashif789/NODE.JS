import fs from "fs"

const writeStreams=fs.createWriteStream("Streams/BigFile.txt");
for(let i=0;i<100000;i++) {
    writeStreams.write(i.toString() + '\n');
}
writeStreams.end(()=>{
    console.log("Big File Created")
    
    const readStreams = fs.createReadStream("Streams/BigFile.txt",{
        encoding:"utf-8",
        highWaterMark:1024
    })
    readStreams.on("data",(chunk)=>{
        console.log("Data received:\n",chunk)
    })
    readStreams.on("close",()=>{
        console.log("Finished reading the file")
    })
})