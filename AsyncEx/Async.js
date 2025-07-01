//ex1
import fs from "fs";
import os from "os";
import rl from "readline-sync";
// fs.readFile("./file1.txt","utf8",(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
//     console.log(data.length);

//     fs.stat("./file1.txt","utf8",(err,stats)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
       
//         console.log(stats.birthtime);
//     });
// });

//ex2
// fs.readdir("./",(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data);
    
// });

//ex3

// function connt(n){
//     console.log(n);
//     if(n == 0){
//         console.log("end");
//         return;  
//     }
//     n -= 1
//     setTimeout(()=>{
//         connt(n)
//     },1000)
// }
// connt(5)


//ex4
// fs.readFile("./file1.txt", "utf8", (err, data) => {
//     if (err) {
//         return console.log(err);
//     }
//     const lines = data.split("\n").filter(line => line);
//     const randomIndex = Math.floor(Math.random() * lines.length);
//     const randomLine = lines[randomIndex];

//     console.log("Random line:", randomLine);
// });

//ex5

// let count = 0;
// const intervalId = setInterval(() => {
//   const freeMemBytes = os.freemem();
//   const totalMemBytes = os.totalmem();
//   const freeMemPercentage = ((freeMemBytes / totalMemBytes) * 100).toFixed(2);

//   console.log(`Free Memory: ${freeMemPercentage}%`);

//   count++;
//   if (count >= 5) {
//     clearInterval(intervalId);
//     console.log("Memory logging complete.");
//   }
// }, 2000);

