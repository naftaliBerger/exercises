// import http from "http";
// const server = http.createServer((req, res) => {
//   let body = [];
//   req.on("data",(chunk) => {
//     console.log(chunk);
//     body.push(chunk);
//   })
//   req.on("end",() => {
//     const data = JSON.parse(Buffer.concat(body).toString());
//     console.log(data);
//     res.end(JSON.stringify(data));
//   })
//   req.on('error',err => {
//     console.error('Request error: ',err);
//     res.writeHead(500,{'Content-Type':'application/json'});
//     res.end(JSON.stringify({error: 'Server error'}));
//   });
//   console.log(req.method);
//   console.log(req.url);
  

//   // res.end("ok")
  
// });


// server.listen(3001, () => {
//   console.log('Server running on port 3000');
// });


//ex1
import http from "http";

// const server = http.createServer((req, res) => {
//   console.log("Method:", req.method);
//   console.log("URL:", req.url);
//   console.log("HTTP Version:", req.httpVersion);

//   res.end("Check the terminal for request info");
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });



//ex2
// const server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     const contentType = req.headers['content-type'];
//     if (contentType === 'application/json') {
//       res.end("JSON accepted");
//     } else {
//       res.end("Unsupported request");
//     }

//   } else {
    
//     res.end("Unsupported request");
//   }
// });

// server.listen(3000, () => {
//   console.log("Exercise 2 server running on port 3000");
// });

//ex3
const server = http.createServer((req, res) => {
  if(req.url === "/hello"){
    if (req.method === 'POST') {
      res.end("hello from POST")
    } 
    else if(req.method === 'GET'){
      res.end("hello from GET")
    }
    else{
      res.end("Not supported")
    }
  }
  else{
    res.end("Bad URL")
  }
});

server.listen(3000, () => {
  console.log("Exercise 2 server running on port 3000");
});