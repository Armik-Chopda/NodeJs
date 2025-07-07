const http=require("http");
const myServer=http.createServer((req,res)=>{
    console.log("New Req Rec...");
    console.log(req.headers);
    
    res.end("Hello from my first server")
    

});
myServer.listen(8000,()=>console.log("server started"));