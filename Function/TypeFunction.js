/**
 * we can declare the function to two type
 * 1. Function Declaration/ function Definition/ function invocation
 * 2. function Expressions / function Anonymous
 */

//function Declaration/Definition
function printMsg() {
  //a+b ==> 6
  console.log("Hello this our fist first function Declaration");
  // console.table(["Hello this our fist first function Declaration"]);
  // console.warn(["Hello this our fist first function Declaration"]);
  // console.error(["Hello this our fist first function Declaration"]);
}
printMsg();

//function  expression
let printOurMsg = function (a = "", b = "", c = "abc") {
  console.log("Hello this our function Anonymous");
};

let array = [1, 2, 4];
// 1 == "true" --> 1 == 1 ||true, { 0 --> false, 1--> true }
printOurMsg(array); //1,2,4
//arrow function
// let printOurMsg = () => {
//   console.log("Hello this our function Anonymous");
// };

// printOurMsg();

//Calculate  the fectorial
let factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};
console.log("factorial", factorial(3)); // Prints – 6
//or --> wrong
// let factorialNo = function fac(n) {
//   if(n < 2) return 1;
//   let ans = 1;
//   for (let i = 2; i <= n; i++) {
//     ans *= i;
//     return ans;
//   }
// };
//   console.log("factorialNo", factorialNo(3));
//or
let factorialNew = (n) => {
  return n < 2 ? 1 : n * factorialNew(n - 1);
};
console.log("factorialNew", factorial(3));

//After Es6 we use Arrow Function
let printArrow = () => {
  console.log("This is Arrow Function");
};

printArrow();
