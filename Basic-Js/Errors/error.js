/**
 * there are Many error in js according to situation
 * 1. ReferenceError:
 * 2. SyntaxError:
 * 3. TypeError:
 *  
 */

//console.log("Checking error type ", a); //ReferenceError: a is not defined

//console.log(a); //ReferenceError: Cannot access 'a' before initialization
// let a;
let a = 10;

// const x = 10;
// x = 20;
// console.log("Checking x error:", x); //TypeError: Assignment to constant variable.

// for (let i = 0; i < 5, i++) {
//     console.log("Checking Syntex error:", i);   //SyntaxError: Unexpected token ')'
// }

// let arr = [];
// arr.length = -1;
//console.log("Checking Length error:", arr); //RangeError: Invalid array length

let s = 20;
console.log("......>>>>", eval("s"));

// function myFunction() {
//     // let functionVar = "I am inside a function!";
//     var functionVar = "I am inside a function!";
//     console.log(functionVar); // Accessible
//   }
  
//   myFunction();
//   console.log("function error:", functionVar); //ReferenceError: functionVar is not defined

//   {
//     let blockVar = "I am block scoped!";
//     var newBlock = "I am the var!!"
//     console.log(blockVar); // Accessible
//   }
//   console.log("Checking boss:", newBlock);//I am the var!!
//   console.log(blockVar); // ReferenceError: blockVar is not defined
  

  let globalVar = "Global";

function outer() {
  let outerVar = "Outer";

  function inner() {
    let innerVar = "Inner";
    console.log("Global: ",globalVar); // Found in global scope
    console.log("outer: ", outerVar);  // Found in outer function's scope
    console.log("inner function",innerVar);  // Found in inner function's scope
  }

  inner();
}

outer();
