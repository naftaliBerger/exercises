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

//CREATE
// function create(){
//     fs.readFile("./db.txt", "utf8", (err, data) => {
//         if (err) {
//             console.log(err);
//         }
//         const allData = JSON.parse(data);
//         const name = rl.question("Please enter your text: ");
//         if(allData.includes(name)){
//             console.log("The name already exists!");
//         }
//         else{
//             allData.push(name);
//             console.log("Added successfully!");
//         }
//         try{
//             fs.writeFile("./db.txt",JSON.stringify(allData), (err)=>{
//                 if(err){
//                     console.error(err.message);
//                 }
//             });
//         }
//         catch(err){
//             console.log(err.message);
//         }});
        
// }

// //read
// function read(){
//     fs.readFile("./db.txt", "utf8", (err, data) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log(data);
//     });
// }

//UPDATE
// function update() {
//   fs.readFile("./db.txt", "utf8", (err, data) => {
//     if (err) {
//       console.log(err.message);
//       return;
//     }

//     const allData = JSON.parse(data);
//     const index = rl.question("Please enter an index: ");

//     if (index > allData.length - 1) {
//       console.log("There is no such location!");
      
//     }

//     const newUser = rl.question("Please enter new user: ");
//     allData[index] = newUser;

//     fs.writeFile("./db.txt", JSON.stringify(allData), (err) => {
//       if (err) {
//         console.error(err.message);
//       } else {
//         console.log("Updated successfully!");
//       }
//     });
//   });
// }



//DELETE
function deleteUser() {
  fs.readFile("./db.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    }

    const allData = JSON.parse(data);
    const index = rl.question("Please enter an index: ");

    if (index > allData.length - 1) {
      console.log("There is no such location!");
      return;
    }

    const newArr = allData.filter((_, i) => i != index);

    fs.writeFile("./db.txt", JSON.stringify(newArr), (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("Updated successfully!");
      }
    });
  });
}


