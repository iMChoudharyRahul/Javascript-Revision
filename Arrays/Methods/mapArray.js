/**
 * Double Each Element in an Array
   Write a function to double each element in an array using map().
   Example:
   Input: [1, 2, 3, 4, 5]
   Output: [2, 4, 6, 8, 10]
 */
   
/**
 * Convert Array of Numbers to Strings
    Write a function to convert an array of numbers to an array of strings using map().
    Example:
    Input: [1, 2, 3, 4, 5]
    Output: ['1', '2', '3', '4', '5']
 */

/**
 * 
    Extract Specific Property from Array of Objects
    Write a function to extract a specific property (e.g., name) from an array of objects using map().
    Example:
    Input:
    [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 }
    ]
    Output: ['Alice', 'Bob', 'Charlie']
 */

/**
 * Square Each Element in an Array
    Write a function to square each element in an array using map().
    Example:
    Input: [1, 2, 3, 4, 5]
    Output: [1, 4, 9, 16, 25]
 */

/**
 * Intermediate Questions
    Transform Array of Strings to Uppercase
    Write a function to convert an array of strings to uppercase using map().
    Example:
    Input: ['apple', 'banana', 'cherry']
    Output: ['APPLE', 'BANANA', 'CHERRY']
 */

/**
 * Add Index to Each Element
   Write a function to add the index of each element to the element itself using map().
   Example:
   Input: ['a', 'b', 'c', 'd']
   Output: ['a0', 'b1', 'c2', 'd3']
 */

/**
 * Transform Array of Objects
   Write a function to transform an array of objects by adding a new property (e.g., isAdult) based on a condition (e.g., age >= 18) using map().
   Example:
   Input:
   [
     { name: 'Alice', age: 25 },
     { name: 'Bob', age: 17 },
     { name: 'Charlie', age: 30 }
   ]
   Output:
   [
     { name: 'Alice', age: 25, isAdult: true },
     { name: 'Bob', age: 17, isAdult: false },
     { name: 'Charlie', age: 30, isAdult: true }
   ]
 */

/**
 * Map Nested Arrays
Write a function to transform a nested array (e.g., multiply each element by 2) using map().
Example:
Input: [[1, 2], [3, 4], [5, 6]]
Output: [[2, 4], [6, 8], [10, 12]]
 */

/**
 * Advanced Questions
Transform Array of Strings to Objects
Write a function to transform an array of strings into an array of objects with properties like name and length using map().
Example:
Input: ['apple', 'banana', 'cherry']
Output:
[
  { name: 'apple', length: 5 },
  { name: 'banana', length: 6 },
  { name: 'cherry', length: 6 }
]
 */

/**
 * Map and Filter Combined
   Write a function to first filter out even numbers and then square the remaining numbers using map() and filter().
   Example:
   Input: [1, 2, 3, 4, 5, 6]
   Output: [1, 9, 25]
 */

/**
 * Transform Array of Numbers to Words
   Write a function to transform an array of numbers into their corresponding words (e.g., 1 → "one") using map().
   Example:
   Input: [1, 2, 3]
   Output: ['one', 'two', 'three']
 */

/**
 * Map with Conditional Logic
   Write a function to transform an array of numbers such that even numbers are doubled and odd numbers are tripled using map().
   Example:
   Input: [1, 2, 3, 4, 5]
   Output: [3, 4, 9, 8, 15]
 */



// Double each element in an array
const doubleElements = arr => arr.map(num => num * 2);

// Extract specific property from array of objects
const extractNames = arr => arr.map(obj => obj.name);

// Transform array of strings to uppercase
const toUppercase = arr => arr.map(str => str.toUpperCase());

// Add index to each element
const addIndex = arr => arr.map((val, index) => val + index);

// Map and filter combined
const filterAndSquare = arr => arr.filter(num => num % 2 !== 0).map(num => num * num);

// Transform array of numbers to words
const numberToWords = arr => {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five'];
  return arr.map(num => words[num]);
};