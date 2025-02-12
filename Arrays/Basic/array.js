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
//console.log("Checking Arr3:", arr3); //array is also a object we declare empty array
//const mixed = [1, "two", { key: "value" }, true]; //we store various type of values

// Accessing elements
//console.log(mixed[0]); // Output: 1
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
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const combined = arr1.concat(arr2); // [1, 2, 3, 4]
//const sliced = combined.slice(1, 3); // [2, 3]

//Splice: Modifies the array by removing, replacing, or adding elements.
// const arr = [1, 2, 3, 4];
// arr.splice(1, 2, "a", "b"); // [1, "a", "b", 4]

//IndexOf, Includes
const arr = [1, 2, 3];
console.log(arr.indexOf(2)); // Output: 1
console.log(arr.includes(4)); // Output: false

// --------------------------------------------------------------------
// Problem-01: Create an array containing different types of teas.
let teaArr = [
  "Lemon Tea",
  "Green Tea",
  "Ginger Tea",
  "Herbal Tea",
  "Oolong Tea",
];
// Problem-02: Add "Chamomile Tea" to the existing list of teas
teaArr.push("Chamomile Tea");
console.log("tea Array:", teaArr);
// Problem-03: Remove "Oolong Tea" from the list of teas.
let index = teaArr.indexOf("Oolong Tea");
console.log("Check Index:", index);
if (index > -1) {
  teaArr.splice(index, 1);
}
console.log(teaArr);
// Problem-04: Filter the list to only include teas that are caffeinated.
let caffeinatedTea = teaArr.filter((item) => item !== "Herbal Tea");
console.log("caffeinatedTea: ", caffeinatedTea);
// Problem-05: Sort the list of teas in alphabetical order.
console.log(teaArr.sort());
// Problem-06: Use a for loop to print each type of tea in the array.
for (let i = 0; i < teaArr.length; i++) {
  console.log(teaArr[i]);
}
// Problem-07: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea").
let caffeinated = 0;
for (let i = 0; i < teaArr.length; i++) {
  if (teaArr[i] !== "Herbal Tea") {
    caffeinated++;
  }
}
console.log("teas are caffeinated count:", caffeinated);
// Problem-08: Use a for loop to create a new array with all tea names in uppercase.
let upperCaseArr = [];
for (let i = 0; i < teaArr.length; i++) {
  upperCaseArr.push(teaArr[i].toUpperCase());
}
console.log("UpperCase Array:", upperCaseArr);
// Problem-09: Use a for loop to find the tea name with the most characters.
let highChar = "";
for (let i = 0; i < teaArr.length; i++) {
  if (teaArr[i].length > highChar.length) {
    highChar = teaArr[i];
  }
}
console.log("High length char: ", highChar);

// Problem-10: Use a for loop to reverse the order of teas in the array.
// console.log("Reverse array:", teaArr.reverse());

let reverseArr = [];
for (let i = teaArr.length - 1; i >= 0; i--) {
  reverseArr.push(teaArr[i]);
}
console.log("Reverse arr:", reverseArr);

function addGuest(guestList, newGuest) {
  // Add the newGuest to guestList and return the updated list;
  guestList.push(newGuest);
  return guestList;
}
