const http=require("http");
const file=require("fs")
const url=require("url")



const myNewServer=http.createServer((req,res)=>{
    const myUrl=url.parse(req.url)//true for creatin url data object

    console.log("wellcome");
    console.log(req.socket.remoteAddress);
    const date=new Date();

    const clientIP =req.socket.remoteAddress
    const data=`IP = ${clientIP} Time =${date.toLocaleTimeString()} URL = ${req.url}\n`
    file.appendFile("./serversData.txt",data,(err,result)=>{
     
        if(err){
            console.log(err)
        }
        else{
            console.log(myUrl)
            switch (req.url) {
                case "/":
                    res.end("Hello Home!");
                    break;
                case "/about":
                    res.end("I Am Armik!");
                    break;
                default:
                    res.end("Hello from Armik!");
            }
            
        }

    })

    
})
myNewServer.listen(8001, () => console.log("Server started on port 8001"));
