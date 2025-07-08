const http=require("http");
const file=require("fs")



const myNewServer=http.createServer((req,res)=>{
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
            console.log("sucsess")
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
            return result
        }

    })

    
})
myNewServer.listen(8000,()=>console.log("server started"))
