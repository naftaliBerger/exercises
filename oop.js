//ex1
// class Phone {
//     constructor(brand,model){
//         this.brand = brand;
//         this.model = model;
//         this.printDetails = function(){
//         console.log(`Phone: ${this.brand} ${this.model}`);
//         }
//     }
// }
// const phon = new Phone("samsung","s22");
// phon.printDetails();

//ex2
// class Rectangle {
//     constructor(width , height){
//         this.width = width;
//         this.height = height;

//         this.area = function(){
//             console.log(`the area of width: ${width} and height: ${height} is ${this.height * this.width}`);
//         }

//     }
// }
// const rectangle = new Rectangle(4,5);
// rectangle.area();


//ex3
// class BankAccount {
//     constructor(ownerName ,balance ){
//         this.balance = balance;
//         this.ownerName = ownerName;

//         this.deposit = function(amount){
//            this.balance += amount;
//         };

//         this.withdraw = function(amount){
//             if(amount <= this.balance){
//                 this.balance -= amount;
//             }
//             else{
//                 console.log("There is not enough money to spend");
//             }
//         };
//         this.checkBalance = function(){
//             console.log(`Balance: ${this.balance}`);
//         };
//     }
// }

// const bankAccount = new BankAccount("NftaliBerger",1000);
// bankAccount.deposit(500); 
// bankAccount.withdraw(200); 
// bankAccount.checkBalance();

//ex4
// class Animal{
//     constructor(name){
//         this.name = name;

//         this.speak = function(){
//             console.log(`voice`);
//         }
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name);
//     }
//     bark = function(){
//         console.log(`${this.name} Barking`);
//     }
// }
// const dog = new Dog("Rocky");
// dog.speak();       // voice
// dog.bark()


