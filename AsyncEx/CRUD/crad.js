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
  
  
  