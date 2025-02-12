/**
 * 1. Array.at():
 * 2. Array.concat():
 * 3. Array.every():
 * 4. Array.fill():
 * 5. Array.filter():
 * 6. Array.map():
 * 7. Array.reduce():
 * 8. Array.find():
 * 9. Array.forEach():
 * 10. Array.includes():
 * 11. Array.shift():
 * 12. Array.unshift():
 * 13. Array.join():
 * 14. Array.pop():
 * 15. Array.push():
 * 16. Array.reverse():
 * 17. Array.slice():
 * 18. Array.sort():
 * 19. Array.splice():
 * 20. Array.toString():
 * 21. Array.some():
 * 22. Array.indexOf():
 */

/**
 * Module-01:
 * shift(), unshift(), length(), push(), pop(), reverse(), sort()
 */
let arr = ["Anita", "Ankita", "laxmi", "Anju"];
//unshift(): Add a new ele at starting position
arr.unshift("lalita");
console.log("Checking Arr:", arr); // [ 'lalita', 'Anita', 'Ankita', 'laxmi', 'Anju' ]

//shift(): remove the ele at starting position
arr.shift();
console.log("Checking Arr:", arr); //[ 'Anita', 'Ankita', 'laxmi', 'Anju' ]

//length:
console.log(arr.length); //4

//push(): Add element on last positions
arr.push("Nikita");
console.log("Checking Arr:", arr); //[ 'Anita', 'Ankita', 'laxmi', 'Anju', 'Nikita' ];

//pop(): remove the last element of given arr and return the remove arr element
console.log("pop: ", arr.pop()); //'Nikita'

//reverse(): reverse the whole array
console.log("reverse arr: ", arr.reverse()); //[ 'Anju', 'laxmi', 'Ankita', 'Anita' ]

//sort();
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];
let sort = mixedNumericArray.sort((a, b) => a - b);
console.log("Sort No: ", sort); //[1, 5, '9', 40, '80', 200, '700']
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
// sort by value
items.sort((a, b) => a.value - b.value);
// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});

//--------------------------------------------------------------------
/**
 * Module-02:
 * map(), filter(), reduce(), find(), forEach(), slice(), splice(), some()
 */
// ----------------------------------------------------------------------
/**
 * Map(): perform some operation like: calculation,
 * return: new Array
 *  syntax: map(callbackFn) and map(callbackFn, thisArg)
 *         callbackFn: (element, index, array)
 *         thisArg: The thisArg argument (defaults to undefined) will be used as the "this" value when calling callbackFn.
 */
// let numberArr = [2, 4, 6, 8, 9];
let numberArr = [1, 4, 9, 16, 25, 36];
//calculation: square roots
let square = numberArr.map((item) => Math.sqrt(item));
console.log("Check square:", square); //new arr: [ 1, 2, 3, 4, 5, 6 ]
console.log("Check Original arr:", numberArr); //[ 1, 4, 9, 16, 25, 36 ]
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
console.log("Object:", reformattedArray); //[ { '1': 10 }, { '2': 20 }, { '3': 30 } ]
const products = [
  { name: "sports car" },
  { name: "laptop" },
  { name: "phone" },
];
//wrong way:
let wrongOp = products.map((product) => {
  product.price = 100;
});
console.log("Check wrong op:", wrongOp); //[ undefined, undefined, undefined ]
//Right ways
const productsWithPrice = products.map((product) => {
  return { ...product, price: 100 };
});
console.log("Products: ", productsWithPrice); //[ { name: 'sports car', price: 100 }, { name: 'laptop', price: 100 }, { name: 'phone', price: 100 }]
//if we don't want to new Array we want to changes exiting array then use forEach
products.forEach((product) => {
  product.price = 100;
});
console.log("Check New Obj: ", products); //[ { name: 'sports car', price: 100 }, { name: 'laptop', price: 100 }, { name: 'phone', price: 100 }]

/**
 * Filter():
 *  Return: new Array
 *  syntax:
 */

/**
 * Module-03:
 * includes(), concat(), fill(), join(), toString(), indexOf(), every(), at()
 */
