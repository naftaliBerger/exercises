


//   fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST", 
//     headers: {
//       "Content-Type": "application/json" 
//     },
//     body: JSON.stringify({
//       title: "hello world",
//       body: "body",
//       userId: 1
//     })
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log("data: ", data); 
//     })
//     .catch(error => {
//       console.error("err: ", error);
//     });
  



    // fetch('https://api-kodkod.onrender.com/api/data', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     //   'x-api-key': 'reqres-free-v1'
          
    //     },
    //     body: JSON.stringify({
    //       name: 'hello world',
    //       job: 'student'
    //     })
    //   })
    //     .then((res) => { 
    //        return res.json();
    //     }).then((data) => {
    //         console.log(data);
    //     });
        




// fetch("https://api-kodkod.onrender.com/api/data")
//     .then((res) => {
//     return res.json(); 
//   }).then((data) => {
//     console.log(data); 
//   });


  
// fetch('https://api-kodkod.onrender.com/api/data', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name: 'hello world',
//       job: 'student'
//     })
//   })
//     .then(res => res.json())
//     .then(data => {
//       console.log("data", data); 
//     })
//     .catch(err => console.error("err", err));
  

// const person = {
//     name: "naftali",
//     sayHello: function () {
//       console.log(this.name);
//     }
//   };
//   person.sayHello();

//   this.name = "bebi";
//   const person1 = {
//     name: "naftali",
//     sayHello: () => {
//       console.log(this.name);
//     }
//   };
  
//   person1.sayHello(); 






const person2 = {
  name: "Sara",
  getName:() => this.name
  
};

const showName = person2.getName;
console.log(showName()); 


function User(name) {
    this.name = name;
    this.getName = ()=>{this.name};
  }
  
  const u = new User("David");
  console.log(u.getName());

  const obj = {
    name: "Root",
    child: {
      name: "Child",
      print:  () => console.log(this.name)
    }
  };
  
  obj.child.print();