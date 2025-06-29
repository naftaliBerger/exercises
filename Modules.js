//ex1
// export function multiply(a, b) {
//     return a * b;
//   }

// export function divide(a, b) {
//     return a / b
// }


//ex2
// const MAXUSERS = 100;

// const DEFAULTROLE = "guest";

// export{MAXUSERS,DEFAULTROLE}



// ex3
export class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    getDetails() {
      return ` ${this.make} ${this.model}`;
    }
  }
  
