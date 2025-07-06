import http from "http";
//ex1
// const server = http.createServer((req,res) =>{
//     res.end("hello from Node Server!")
// });
// server.listen(3001,() =>{
//     console.log("start lisening");
// })

//ex2
// const server = http.createServer((req,res) =>{
//     res.end(`You are using waes ${req.method}`);
// });
// server.listen(3001,() =>{
//         console.log("start lisening");
//     });


//ex3
// const server = http.createServer((req,res) =>{
//     res.end(JSON.stringify(req.headers))
// });
// server.listen(3001,() =>{
//         console.log("start lisening");
//     });

//ex4
