const express=require("express")
const port=3001
const app=express()
app.get("/",(req,res)=>{
    res.send("Hello World")
});
app.get("/about",(req,res)=>{
    res.send("about" + `hy ${req.query.name} ${req}` )
    
    
});
app.get("/home",(req,res)=>{
    res.send("home" + `hy ${req.query.name}`)
});
app.listen(port,()=>{
    console.log("server stated");
    
})