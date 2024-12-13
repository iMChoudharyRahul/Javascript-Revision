/**
 * Memorization is technique to increase function execution speed
 * How: we use cache memory(object) if first time call the function we store the
 *      calculate the data on cache and again client send the same request we
 *      return cache data
 * definition:
 *     memorization is a technique used to optimize the performance of functions by
 *     caching the results of expensive function calls and returning the cached result
 *     when the same inputs occur again.This can be particularly useful in situations
 *     where a function is called with the same arguments multiple times, and
 *     recalculating the result each time is resource-intensive.
 */

//function with without memorization
const calculateTotalPrice = (items) => {
  let totalPrice = 0;
  for (let key of items) {
    totalPrice += key.price;
  }
  return totalPrice;
};

//function with memorization
const memoizeCalculateTotalPrice = (items) => {
  let cache = {};

  return (items) => {
    const key = JSON.stringify(items);
    if (cache[key]) {
      console.log("if value already available then return ");
      return cache[key];
    } else {
      let totalPrice = 0;
      for (let value of items) {
        totalPrice += value.price;
      }
      cache[key] = totalPrice;
      return totalPrice;
    }
  };
};

// Usage
const items = [
  { name: "Item 1", price: 20 },
  { name: "Item 2", price: 30 },
  { name: "Item 3", price: 15 },
];
console.log("without Cached ",calculateTotalPrice(items)); // Calculates and prints total price
// console.log(calculateTotalPrice(items)); // Uses cached result and prints "Returning cached result..."

const calculateTotalPriceMemoized = memoizeCalculateTotalPrice();

console.log("first Time Cached the result: ",calculateTotalPriceMemoized(items)); // Calculates and prints total price
console.log(calculateTotalPriceMemoized(items)); // Uses cached result and prints "Returning cached result..."


// const getBasketTotal = (basket) => {
//     return basket?.reduce((amount, item) => {
//         let cacheMemo = {};
//       if (item.quantity){
//          if(cacheMemo[item.quantity]){

//          }
//           return Math.floor(item.price * item?.quantity * 83 + amount);
//       }
  
//       return Math.floor(item.price * 83 + amount);
//     }, 0);
//   };

//Amazon Project Add to cart price calculation
const memoizeGetBasketTotal = function () {
    const cache = {};
  
    return (basket)=> {
      const key = JSON.stringify(basket);
      if (cache[key]) {
        console.log("Returning cached result...");
        return cache[key];
      } else {
        console.log("Calculating basket total...");
        const total = basket?.reduce(function (amount, item) {
          if (item.quantity)
            return Math.floor(item.price * item?.quantity * 83 + amount);
  
          return Math.floor(item.price * 83 + amount);
        }, 0);
        cache[key] = total;
        return total;
      }
    };
  };
  
  // Usage
  const basket = [
    { name: "Item 1", price: 20, quantity: 2 },
    { name: "Item 2", price: 30, quantity: 1 },
    { name: "Item 3", price: 15, quantity: 3 }
  ];
  
  const memoizedGetBasketTotal = memoizeGetBasketTotal();
  
  console.log(memoizedGetBasketTotal(basket)); // Calculates and prints basket total
  console.log(memoizedGetBasketTotal(basket)); // Uses cached result and prints "Returning cached result..."
  
  //Example Calculate fibonacci number 
  function fibonacci(n, cache={}){
     //check the n is already available on cache
     if (n in cache){
        return cache[n];
     }
     //if not then calculate the fibonacci number 
     if (n <= 2){
        return 1;
     }

     let fibNumber = fibonacci(n-1, cache) + fibonacci(n-2, cache);
     cache[n]= fibNumber;
     return fibNumber;
  };

  console.log("Check fibonacci number ", fibonacci(9)); //prints 44