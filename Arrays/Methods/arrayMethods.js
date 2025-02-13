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
 * 23. Array.flat();
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
 * Filter(): The filter() method of Array instances creates a shallow copy of a portion of a given array,
 *  Return: its return a new array with true value match the condition
 *  syntax: filter(callbackFn) and map(callbackFn, thisArg)
 *         callbackFn: (element, index, array)
 *         thisArg: The thisArg argument (defaults to undefined) will be used as the "this" value when calling callbackFn.
 */
/**
 * Filter Even Numbers
    Write a function to filter out all the even numbers from an array.
    Example:
    Input: [1, 2, 3, 4, 5, 6]
    Output: [2, 4, 6]
 */
let even = [1, 2, 3, 4, 5, 6];
let filterEvenNo = even.filter((item) => item % 2 === 0);
console.log("Check even no: ", filterEvenNo);
/**
 * Filter Odd Numbers:
  Write a function to filter out all the odd numbers from an array.
  Example:
  Input: [1, 2, 3, 4, 5, 6]
  Output: [1, 3, 5]
 */
let oddNo = even.filter((item) => item % 2 !== 0);
console.log("Check odd no", oddNo);

/**
 * Filter Numbers Greater Than a Value:
    Write a function to filter out all numbers greater than a given value.
    Example:
    Input: [10, 20, 30, 40, 50], Value: 25
    Output: [30, 40, 50]
 */
const grater = [10, 20, 30, 40, 50];
let gt = grater.filter((item) => item > 25);
console.log("Grater Then 25 value:", gt);
/**
 * Filter Strings by Length:
  Write a function to filter out all strings with a length greater than a specified number.
  Example:
   Input: ["apple", "bat", "car", "dog"], Length: 3
   Output: ["apple"]
 */
const st = ["apple", "bat", "car", "dog"];
const gtString = st.filter((item) => item.length > 3);
console.log("gt then 3 length: ", gtString);

/**
  * Reduce: The final result of running the reducer across all elements of the array is a single value.
  * return: Reduces an array to a single value(single value after perform some operation)
  * syntax: reduce(callbackFn) and reduce(callbackFn, initialValue)
           callback(accumulator, currentValue, currentIndex, array);
           initialValue(optional): 
               -> if Initial value is available == accumulator default value we assign(currentValue start from array first value)
               -> if not available then array first value is == accumulator value
                   --> in this case currentValue start from seconde value of array

  */
//without pass initial value:
const array = [15, 16, 17, 18, 19];
function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue; // 15+16(index=1), 31+17(index=2), 48+18(index=3), 66+19(index=4)
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer); //85
//pass initial value
let finalValue = array.reduce((accumulator, currentValue, index) => {
  const returns = accumulator + currentValue; //10+15(index=0), 25+16(index=1), 41+17(index=2), 58+18(index=3)
  console.log(
    `with initial value: accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}, 10);
console.log("Check final result:", finalValue); //95

/**
    * Example: 
    * Find Maximum Value in an Array
      Write a function to find the maximum value in an array using reduce().
      Example:
      Input: [10, 20, 5, 30, 15]
      Output: 30
  */
const gtValue = [10, 20, 5, 30, 15];
const maxValue = gtValue.reduce((acc, item) => {
  if (item > acc) {
    acc = item;
  }
  return acc;
});
console.log("Check gt value:", maxValue);
/**
      Find Minimum Value in an Array
      Write a function to find the minimum value in an array using reduce().
      Example:
      Input: [10, 20, 5, 30, 15]
      Output: 5
    */
const minValue = gtValue.reduce((acc, item) => {
  if (item < acc) {
    acc = item;
  }
  return acc;
});
console.log("Check minValue value:", minValue);

/**
 * find():  The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
 * return: condition match then return value otherwise return undefine
 * syntax: find(callbackFn) and find(callbackFn, thisArg)
 *          callbackFn(element, index, array)
 */
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
const res = inventory.find((item) => item.name === "cherries");
console.log("Check find res: ", res); //{ name: 'cherries', quantity: 5 }
/**
 * forEach(): A function to execute for each element in the array
 * return: None (undefined)
 * syntax: forEach(callbackFn) and forEach(callbackFn, thisArg)
             callbackFn(element, index, array)
 */
const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element)); //"a" "b" "c"

let itemArr = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < itemArr.length; i++) {
  copyItems.push(items[i]);
}

// after
itemArr.forEach((item) => {
  copyItems.push(item);
});

//Example: Flatten an array
const flatten = function (nestedArr) {
  const newArr = [];
  nestedArr.forEach((item) => {
    if (Array.isArray(item)) {
      newArr.push(...flatten(item));
    } else {
      newArr.push(item);
    }
  });
  return newArr;
};
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log("Check flatten arr: ", flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * slice():
 * return:
 * syntax:
 */

/**
 * splice():
 * return:
 * syntax:
 */

/**
 * some(): If you need to find if any element satisfies the provided testing function, use some().
 *return:
 * syntax:
 */

/**
 * flat():
 * return:
 * syntax:
 */

//  --------------------------------------------------------------------------
/**
 * Module-03:
 * includes(), concat(), fill(), join(), toString(), indexOf(), every(), at()
 */
