/**
 * Array: Array is a Data Structure that are use to store multiple data type values  in single variable such as string, array and object. Arrays in JavaScript are dynamic and can grow or shrink in size as needed. array element index start with 0.
 *
 */
/**
 * 1. How many type we declare a array
 */
let arr0 = []; //empty array
let arr1 = [1, 2, 3, 4, 5, 6]; //give some value
let arr2 = new Array();
console.log("Checking Arr3:", arr3); //array is also a object we declare empty array
const mixed = [1, "two", { key: "value" }, true]; //we store various type of values

// Accessing elements
console.log(mixed[0]); // Output: 1
// Modifying elements
arr1[1] = 10;
console.log(arr1); // Output [1, 10, 3, 4, 5, 6];

/**
 * Array Operation: push, pop, shift, unshift, Concat and Slice, Splice,  IndexOf, Includes,
 * concat: Combines arrays without modifying them.
 * slice: Creates a shallow copy of part of the array.
 * Splice: Modifies the array by removing, replacing, or adding elements.
 * IndexOf:Finds the index of an element.
 * Includes: Checks if an element exists
 */
const arrNew = [1, 2, 3];
arrNew.push(4); // [1, 2, 3, 4]
arrNew.pop(); // [1, 2, 3]
arrNew.shift(); // [2, 3]
arrNew.unshift(0); // [0, 2, 3]

// Concat and Slice
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2); // [1, 2, 3, 4]
const sliced = combined.slice(1, 3); // [2, 3]

//Splice: Modifies the array by removing, replacing, or adding elements.
const arr = [1, 2, 3, 4];
arr.splice(1, 2, "a", "b"); // [1, "a", "b", 4]

//IndexOf, Includes
const arr = [1, 2, 3];
console.log(arr.indexOf(2)); // Output: 1
console.log(arr.includes(4)); // Output: false
