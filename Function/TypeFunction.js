/**
 * we can declare the function to two type
 * 1. Function Declaration/ function Definition/ function invocation
 * 2. function Expressions / function Anonymous
 */

//function Declaration
function printMsg() {
  console.log("Hello this our fist first function Declaration");
}
printMsg();

//function  expression
let printOurMsg = function () {
  console.log("Hello this our function Anonymous");
};
printOurMsg();

//Calculate  the fectorial
let factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};
console.log(factorial(3)); // Prints – 6
//or
let factorialNo = function fac(n) { 
  let ans = 1;
  for (let i = 2; i <= n; i++) {     
    ans *= i;
    return ans;
  }
};
console.log(factorialNo(3)); // Prints - 6

//After Es6 we use Arrow Function
let printArrow = () => {
 console.log("This is Arrow Function");
};

printArrow();