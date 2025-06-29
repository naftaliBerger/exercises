import err from "./errorHandling.js"
// ex1
// input = "12356";
// sum = 0;
// for(let i = 0;i < input.length; i++ ){
//     sum += Number(input[i])

// }  
// console.log(sum);  

// ex2
// let input = 5;

// for(let i = 1;i <= input;i++){
//     let star = "";
//     for(let j = 0;j < i;j++){
//         star += "*";
//     }
//     console.log(star);
// }

// ex3
// num1 = 2;
// num2 = 3;
// num3 = 8;
// num4 = 56;
// num5 = 44;
// arr = [];
// arr.push(num1);
// arr.push(num2);
// arr.push(num3);
// arr.push(num4);
// arr.push(num5);
// let max = arr[0];
// for (let i = 1;i < arr.length;i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max);


// ex4
// input = "123456"
// let conter = 0;
// for(let i = 0;i<input.length;i++){
//     conter++;
// }
// console.log(conter);

// ex5
// start = 4;
// end = 9;
// for (let i = start;i < end;i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// input = "AaBbCc";
// index = [];
// for(let i = 0;i < input.length;i++){
//     if(input[i] >= 'A' && input[i] <= 'Z'){
//         index.push(i);

//     }
// }

// const person = {name:"naftali",age:21,citi:"bnyBrak"};
// console.log(person.name,person.age,person.citi);














//ex1
// function createCounter(){
//     let count = 0;
//     return function(){
//         count ++;
//         return count;
//     };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


//ex2
// function secretHolder(secret) {
//     return {
//       getSecret: function() {
//         return secret;
//       },
//       setSecret: function(newSecret) {
//         secret = newSecret;
//       }
//     };
//   }
  
//   const mySecret = secretHolder("abc");
//   console.log(mySecret.getSecret()); // "abc"
//   mySecret.setSecret("123");
//   console.log(mySecret.getSecret()); // "123"
  