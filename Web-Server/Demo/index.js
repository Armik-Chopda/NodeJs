const http=require("http");
const file=require("fs")
const url=require("url")
const myServer=http.createServer((req,res)=>{
    const myUrl=url.parse(req.url,true)
    const log = `date= ${Date.now()}\n`;
    file.appendFile("./demo.txt",log,(err)=>{
        if(err){
            console.log(err);
            
        }
        else{
            console.log(myUrl);
            
            res.end("wallcome bose")
        }

    });
    

});
myServer.listen(9000, () => {
    console.log("Server started on port 9000");
});