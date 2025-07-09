const http=require("http");
const file=require("fs")
const url=require("url")
const myServer=http.createServer((req,res)=>{
    const myUrl=url.parse(req.url,true)
    const log = `date= ${Date.now()} methord= ${req.method}\n`;
    file.appendFile("./demo.txt",log,(err)=>{
       
        if(err){
            console.log(err);
            
        }
        else{
         
            console.log(myUrl);
            
          
            switch(myUrl.pathname){
                case '/a':
                    if(req.method==="GET"){
                        console.log("wellcome to home page");
                         res.end("Welcome to home page");
                        
                    }
                    break;
                case '/about':
                    res.end("I Am Armik!");
                    break;
                case '/login':
                    res.end("login page");
                    
                    if(req.method==="POST"){
                        res.end("success!")
                    }  
                    break; 
                default:
                    res.end("Hello from Armik!");
                    break;    
            }
        }

    });
    

});
myServer.listen(7000, () => {
    console.log("Server started on port 9000");
});