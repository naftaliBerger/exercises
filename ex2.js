//ex1
// let str1 = "aaa";
// let str2 = "bbb";
// str1 = str1 + str2;
// str2 = str1.slice(0, str1.length - str2.length);
// str1 = str1.slice(str2.length);
// console.log("str1:", str1);
// console.log("str2:", str1);


//ex2
// let contter = 0;
// const matrix = [
//     ["X", "x", "x", "X", "x"],
//     ["x", "x", "X", "x", "x"],
//     ["X", "X", "x", "x", "x"],
//     ["x", "x", "x", "X", "X"],
//     ["x", "X", "x", "x", "x"]
//   ];
//   for(let i = 0;i < matrix.length;i++){
//     for (let j = 0; j < matrix[i].length; j++){
//         if(matrix[i][j] == "X"){
//             contter++;
//         }
//     }
//   }
//   console.log(contter);


//ex3
function readFamily(){
    
    let family = ({
        parents: {},
        children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ]});
        const thirdChild  = family.children[2].name;
        return thirdChild;
}
console.log(readFamily()); 

    
  







//ex1
//const arr = [1,2,3,4,5,6];
// function doubleValues(arr){
//     function double(item){
//         return item * 2;
//     }
//     console.log(arr.map(double));
// }
// doubleValues(arr)


//ex2
// const arr = [1,2,3,4,5,6];
// function onlyEvenValues(arr){
//     let isEven = arr.filter(item => item % 2 == 0);
//     console.log(isEven);    
// }
// onlyEvenValues(arr)
     
//ex3
// const arr = [1, "hello", true, "world"];
// function showFirstAndLast(arr){

//     let stringsOnly = arr.filter(item => typeof item === "string");
//     console.log(stringsOnly[0], stringsOnly[stringsOnly.length - 1]);


// }
// showFirstAndLast(arr)
         
//ex4
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// const str = "educational authoritative facetious equation audiovisual simultaneous";
// function vowelCount(str) {
//   const result = {};
//   const letters = str.split('');

//   letters.forEach(char => {
//     for (let i = 0; i < vowels.length; i++) {
//       if (char == vowels[i]) {
//         if (result[char]) {
//           result[char] += 1;
//         } else {
//           result[char] = 1;
//         }
//       }
//     }
//   });

//   return result;
// }

// console.log(vowelCount(str));



//ex5
// const str = "abde";
// const letters = str.split('');
// function capitalize(str){
//     let upp = letters.map(char => char.toUpperCase())
//     return upp.join('');
// }
// console.log(capitalize(str));


//ex6
// const str = "abde";
// function shiftLetters(str) {
//     const letters = str.split('');
  
//     let LetterAfter = letters.map(char => {
//       if (char >= 'a' && char <= 'z') {
//         return String.fromCharCode(char.charCodeAt(0) + 1);
//       }
//       else if (char >= 'A' && char <= 'Z') {
//         return String.fromCharCode(char.charCodeAt(0) + 1);
//       }
      
//     });
  
//     return LetterAfter.join('');
//   }
  
//   console.log(shiftLetters(str));

