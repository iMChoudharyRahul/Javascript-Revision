/**
 * Defination:=> A function that Takes a Function as a argument and also we can return a function callesd higher Order Function
 * Example:=> Array.filter, Array.sort(), Array.map(), Array.reduce() etc 
 * task: Create a Calculator that takes Two argument first is function and second is array
 */

//calculator function
const calculator = (operation, numArray) =>{
    let a, b;
    if(numArray.length <= 2){
         a = numArray[0];
         b = numArray[1];
    }
    return operation(a, b);
}

//Calculation Two no Sum
const sum = (a, b) => {
  return a+b;
}
//Calculating two no multi
const multi = (a, b)=> {
  return a*b;
}
//divide two no 
const divide = (a, b)=> {
  return a/b;
}

//subtratct two no
const minus = (a, b)=> {
  return a-b;
}

//call one by one All function
console.log("Two no Sum is: ", calculator(sum, [4, 3]));
console.log("Two no Multiply is: ", calculator(multi, [4, 3]));
console.log("Two no divide is: ", calculator(divide, [4, 3]));
console.log("Two no minus is: ", calculator(minus, [4, 3]));