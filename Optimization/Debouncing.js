/**
 * Debouncing: Debouncing is a programming practice used in JavaScript to improve browser 
 *             performance, there might be some functionality or method on webpages, 
 *             which require some time to complete, if such kind of method invoke frequently
 *             again and again then it might be bed effect on browser performance.
 *             This is particularly useful when dealing with events that trigger 
 *             frequently, like such as user input events like scrolling, resizing,
 *             or typing search bars, autocomplete suggestions, or infinite scrolling etc
 * simple definition: 
 *    Debouncing is a way of delaying the execution of a function until a certain 
 *    amount of time has passed since the last time it was called. This can be useful
 *    for scenarios where we want to avoid unnecessary or repeated function calls that
 *    might be expensive or time-consuming.
 #*How Debouncing Works:**
     The basic idea behind debouncing is to delay the execution of a function until
     a certain amount of time has passed since the last time the event was triggered.
     Here's how it works:
       1. When an event is triggered, a timer is set to execute the function after a
           specified delay (e.g., 300 milliseconds).
       2. If the event is triggered again before the timer runs out, the timer is 
          reset. This effectively postpones the execution of the function.
       3. If the event is not triggered again within the specified delay, the 
          function is finally executed.
        
      Example: we are working on an e-commerce website, and we have a search bar that
         provides live search suggestions as the user types. If you update the search
         suggestions with every keystroke, it could lead to a high number of requests
         to the server and potentially impact performance. Debouncing can be used to 
         delay the execution of the search function until the user has stopped typing
         for a short period.    
 */
   //simple example
         const debounce = (callbackFunc, delay) => {
            // Declare a variable called 'timer' to store the timer ID
            let timer;
          
            // Return an anonymous function that takes in any number of arguments
            return function (...args) {
              // Clear the previous timer to prevent the execution of 'callbackFunc'
              //if user again click the button then clear time out again start
              clearTimeout(timer);
          
              // Set a new timer that will execute 'mainFunction' after the specified delay
              timer = setTimeout(() => {
                callbackFunc(...args);
              }, delay);
            };
          };
          // Define a function called 'searchData' that logs a message to the console
    function searchData() {
    console.log("searchData executed");
  }
  
  // Create a new debounced version of the 'searchData' function with a delay of 3000 milliseconds (3 seconds)
  const debouncedSearchData = debounce(searchData, 3000);
  
  // Call the debounced version of 'searchData'
  debouncedSearchData();

  