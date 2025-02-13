/**
 * **************************Intermediate Questions
01-Flatten a Nested Array:
   Write a function to flatten a nested array using reduce().
   Example:
   Input: [[1, 2], [3, 4], [5, 6]]
   Output: [1, 2, 3, 4, 5, 6]
 */
let array = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let simple = array.reduce((acc, item) => {
  return acc.concat(item);
}, []);
console.log("one array value: ", simple); //[ 1, 2, 3, 4, 5, 6 ]
/**
 * 02-Count Occurrences of Elements:
   Write a function to count the occurrences of each element in an array using reduce().
   Example:
   Input: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
   Output: { apple: 3, banana: 2, orange: 1 }
 */
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const occurrences = fruits.reduce((acc, currItem) => {
  acc[currItem] = (acc[currItem] || 0) + 1;
  return acc;
}, {});
console.log("Check occurrences: ", occurrences); //{ apple: 3, banana: 2, orange: 1 }
/**
 * 03-Group Objects by Property:
    Write a function to group an array of objects by a specific property using reduce().
    Example:
    Input:
    [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 25 }
    ]
    Output:
    {
      25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
      30: [{ name: 'Bob', age: 30 }]
    }
*/

/**
 * 04-Remove Duplicates from an Array:
    Write a function to remove duplicates from an array using reduce().
    Example:
    Input: [1, 2, 2, 3, 4, 4, 5]
    Output: [1, 2, 3, 4, 5]
 */
const dupArr = [1, 2, 2, 3, 4, 4, 5];
const withoutDup = dupArr.reduce((acc, currItem) => {
  if (!acc.includes(currItem)) {
    acc.push(currItem);
  }
  return acc;
}, []);
console.log("Without duplicate value: ", withoutDup); //[ 1, 2, 3, 4, 5 ]
/**
 * *************************Advanced Questions
    06-Calculate Average of Array Elements:
    Write a function to calculate the average of all elements in an array using reduce().
    Example:
    Input: [10, 20, 30, 40, 50]
    Output: 30
 */

/**
 * 07-Transform Array into an Object:
    Write a function to transform an array into an object using reduce().
    Example:
    Input: [['a', 1], ['b', 2], ['c', 3]]
    Output: { a: 1, b: 2, c: 3 }
 */
const newArr = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const reduceObj = newArr.reduce((acc, currItem) => {}, {});

/**
 * 08-Find the Longest Word in an Array:
   Write a function to find the longest word in an array using reduce().
   Example:
   Input: ['apple', 'banana', 'kiwi', 'strawberry']
   Output: 'strawberry'
 */

/**
 * 09-Merge Multiple Arrays into One:
   Write a function to merge multiple arrays into one using reduce().
   Example:
   Input: [[1, 2], [3, 4], [5, 6]]
   Output: [1, 2, 3, 4, 5, 6]
 */
