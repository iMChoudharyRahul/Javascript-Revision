/**
 * Intermediate Array Filter Questions
   Filter Duplicates
   Write a function to remove duplicate elements from an array.
   Example:
   Input: [1, 2, 2, 3, 4, 4, 5]
   Output: [1, 2, 3, 4, 5]
 */
 
/**
 * Filter Elements by Type
   Write a function to filter out all elements of a specific type (e.g., numbers, strings, etc.).
   Example:
   Input: [1, "apple", 2, "banana", 3], Type: "string"
   Output: ["apple", "banana"]
 */

/**
 * Filter Elements Based on a Condition
   Write a function to filter elements based on a custom condition (e.g., divisible by 3, starts with a specific letter, etc.).
   Example:
   Input: [10, 15, 20, 25, 30], Condition: divisible by 5
   Output: [15, 20, 25, 30]
 */

/**
 * Filter Negative Numbers:
   Write a function to filter out all negative numbers from an array.
   Example:
   Input: [-1, 2, -3, 4, -5, 6]
   Output: [2, 4, 6]
 */

/**
 * Advanced Array Filter Questions:
   Filter Unique Elements
   Write a function to filter out elements that appear only once in the array.
   Example:
   Input: [1, 2, 2, 3, 4, 4, 5]
   Output: [1, 3, 5]
 */

/**
 * Filter Elements Based on Multiple Conditions:
   Write a function to filter elements based on multiple conditions (e.g., greater than 10 and even).
   Example:
   Input: [5, 12, 15, 20, 25], Conditions: >10 and even
   Output: [12, 20]
 */

/**
 * Filter and Transform
   Write a function to filter elements and then transform them (e.g., filter even numbers and then square them).
   Example:
   Input: [1, 2, 3, 4, 5, 6]
   Output: [4, 16, 36]
 */

/**
 * Filter Nested Arrays
   Write a function to filter elements in a nested array (e.g., filter out all even numbers from a 2D array).
   Example:
   Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
   Output: [[2], [4, 6], [8]]
 */



// Filter duplicates
const filterDuplicates = (arr) => [...new Set(arr)];

// Filter and transform (even numbers squared)
const filterAndTransform = (arr) => arr.filter(num => num % 2 === 0).map(num => num * num);

// Filter nested arrays
const filterNestedEvens = (arr) => arr.map(subArr => subArr.filter(num => num % 2 === 0));
   