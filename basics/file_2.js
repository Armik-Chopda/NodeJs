const file=require('fs');
const os=require('os')
// Bloking oprations //Sync...
console.log("1..........");

const result=file.readFileSync("./tect2.txt","utf-8");
console.log(result);
console.log("2...........");

//Non-Bloking oprations
console.log("3...............");
file.readFile("./tect2.txt","utf-8",(err,result)=>{
    console.log(result)
})
console.log("4............");

console.log(os.cpus().length);









