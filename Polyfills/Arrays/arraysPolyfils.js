/**
 * Map: take element and index
 * ex: newArr = arr.map((e)=> e*2); multiple all array element by 2
 * we want create same functionality using polyfill function
 */

let arr = [1, 2, 3, 4, 5, 6];
//here is my polyfills function
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callbackFun) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      // console.log("Check this value: ", this); [1, 2, 3, 4, 5, 6];
      let value = callbackFun(this[i], i);
      newArr.push(value);
    }
    return newArr;
  };
}

const result = arr.myMap((e) => e * 2); //this the callback function take the myMap Function
console.log("Array: ", result);

/**
 * ForEach: Take function and function take element and index and do some operation and no return any values
 * ex:
 */

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callbackFn) {
    console.log("Check this value:", this);
    for (let i = 0; i < this.length; i++) {
      callbackFn(this[i], i);
    }
  };
}

arr.myForEach((e, i) => console.log(`arr index ${i} and value is ${e}`));

/**
 * Filter: take a function and function take two argument element and index
 * signature: if condition matching with true return new array
 *  newArr = arr.filter((e)=> e%2 === 0);
 */
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callbackFn) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      if (callbackFn(this[i])) {
        //this statement goes true then we push the resulting values into array
        newArr.push(this[i]);
      }
    }
    return newArr;
  };
}

let newResult = arr.myFilter((e) => e % 2 === 0);
console.log("Filter values: ", newResult);
