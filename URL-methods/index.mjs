import http from 'http'

const server=http.createServer((req,res)=>{
    const myUrl=new URL(req.url,`http://${req.headers.host}`);
    const responseText=`
    FullUrl:${myUrl.href}
    PathName:${myUrl.pathname}
    Hostname:${myUrl.hostname}
    PortName:${myUrl.port}
    QueryParams:
    name=${myUrl.searchParams.get('name')}
    age=${myUrl.searchParams.get('age')}
    `
    res.writeHead(200,{"Content-type":"text/plain"})
    res.end(responseText);

})
server.listen(5000,()=>{
    console.log("Server running at http://localhost:5000");
})