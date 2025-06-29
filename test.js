// console.log(process.argv);


// function ToUpp(firstName,LastName){
//     let fn = firstName.toUpperCase()
//     let ln = LastName.toUpperCase()
//     return fn + " " + ln;
// }
// console.log(ToUpp("naftali","berger"));

// const calculator = {
// strat : (num1,add) => {return },
// add : (num1, subtract) => {return num1 + 3},
// subtract : (num1,num2) => {return num1 - 4},
// multiply : (num1,num2) => {return num1 * 5},
// divide : (num1,num2) => {return num1 / 2}
// }




// console.log(calculator.add(12));
// console.log(calculator.subtract(12,18));
// console.log(calculator.multiply(12,18));
// console.log(calculator.divide(12,18));

// const cars = [
//     {"Toyota": 120 },
//     {"BMW": 150 },
//     {"Mazda": 130 },
//     {"Tesla": 180 },
//     {"Kia": 110 }
//   ];

// function fanc(cars){
//     for (let car of cars) {
//         for (let name in car) {
//             if (name > 80){
//                 console.log(car);
//             }
//     }
// }


// fanc(cars);




// function Persoun(name){
//     this.name = name;
//     this.GetName = function(){
//         return this.name;
//     }
//     this.SetName = function(NewName){
//         this.name = NewName;
//     }
// }
// const persoun = new Persoun("naftali");
// console.log(persoun.GetName());
// persoun.SetName("berger");
// console.log(persoun.GetName());


    // function Animel(name){
    //     this.name = name;
    //     this.MakeSound = function(sound){
    //         console.log(`my name is: ${this.name} my sound is: ${this.sound}`);
    //     }

    // }
    // const dog  = new Animel("dog");
    // const cat = new Animel("cat");
    // Object.getPrototypeOf(dog,                                                                                          )
  
    
function processUserData(input, index){
    try{
        json.parse(input);
    }
    catch(error){
        if(error instanceof SyntaxError){
            console.error("Invalid JSON" ,error.message)

        }
    }
}
