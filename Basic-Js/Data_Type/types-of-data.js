/**
 * Two type Of data Type:
 *  1. Primitive data type: string, null, undefine, boolean, symbol, number, BigInt
 *  2. Reference Data Type: Object, Function Array.
 * 
 * check the type of all data type 
 *  String: Returns "string".  
 *  Null: Returns "object" (due to historical reasons in JavaScript).
 *  Undefined: Returns "undefined".
 *  Boolean: Returns "boolean".
 *  Symbol: Returns "symbol".
 *  Number: Returns "number".
 *  BigInt: Returns "bigint".
 * Q: What is the output of typeof null? Why?
 * A: "object". It's a long-standing bug in JavaScript that hasn't been fixed for backward compatibility
 */

//Type of all Data type:
console.log(typeof "Hello, World!"); // string
console.log(typeof null);           // object (this is a well-known quirk in JavaScript)
console.log(typeof undefined);      // undefined
console.log(typeof true);           // boolean
console.log(typeof Symbol("id"));   // symbol
console.log(typeof 42);             // number
console.log(typeof 123n);           // bigint
console.log(typeof([]));            //Object
console.log(typeof({}));            //object
console.log("type of function: ", typeof(()=> {}));  //function

/**
 * ## Question-01: What is the difference between undefined and null?
 *    Answer: undefined: A variable that has been declared but not assigned a value
 *            Null: no value or empty value
 *            NaN: Not a Number, when we calculate a value that is imposible to calculate then we get the value NaN
 */
  var x; //Undefined
  let y = null;
  console.log("Check Null Vlaue:", y); //null
  console.log("Check NaN value", 69 * "rahul"); //NaN


  var a =10;
  a = " 'Rahul Choudhary' "
  console.log("Checking a:>", a); //  'Rahul Choudhary' (take both side space)

  var a = "A";
console.log("Checking res: ", 65 - a); //NaN

console.log("Checking type of: ", typeof("-1")); //string
console.log(20 + 12 * 2 - 10 / 2); //39


//check the output 
var c = 4;
var d = c++;
d += 1;
console.log("Check d:", d);

console.log(1 + '1');

var f;
// console.log("***", f + "b");
// console.log("Checking null and undifine: ", null == undefined);

if( -1 ) {
    console.log("true")
}
else {
    console.log("false")
} 

if( "" ) {
    console.log("true")
}
else {
    console.log("false")
}

// for(var i=0; i<5; ++i) {
//     console.log(i, "Hello") ;
//  }

//  var i , j ;
//    for(i=0, j = 10; i < 10; j < 100) {
//    console.log("Hello");
//    }

var a = 2;
var b = 0;
while(a <= 4){
    a++;
    b += a * 2;
    console.log(b);
}