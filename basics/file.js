const file=require("fs")
//Sync....
// file.writeFileSync('./text.txt',"Armik")
file.writeFile("./text.txt","hello Armik",(err)=>{});//Async way   // call back function compulsory

const result=file.readFileSync("./tect2.txt","utf-8")  //Sync....
console.log(result);


//Async.....
file.readFile('./tect2.txt',"utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
        
    }else{
        console.log(result);
        
    }
})

///////////////////////
const date=new Date()

file.appendFileSync("./tect2.txt",`${date.toLocaleDateString()} hy Armik\n`)

/////////////////
// Copy file
// file.copyFileSync('./tect2.txt',"./text.txt")



////////////////////////
//Delete file
// file.unlinkSync('./text.txt')
console.log(file.statSync('./tect2.txt'))//information about file 
