/**
 * Throttling: Throttling is a technique in JavaScript used to control the rate at 
 *   which a function is invoked. It ensures that a particular function is not called
 *   more than once in a specified time interval.
 * 
 * 
 * Example:
 * example for throttling. Imagine you are developing a real-time financial dashboard
 *  that displays live stock prices. You want to update the UI with the latest stock
 *  prices as they change. However, the stock prices may change rapidly, and updating
 *  the UI on every price change could lead to a poor user experience and unnecessary
 *  resource consumption. Throttling can be applied to ensure that the UI updates 
 *  occur at a controlled rate.
 * updateStockPrice ensures that the UI updates occur at most once every 1000 milliseconds,
 *  controlling the rate of UI updates and improving performance.
 */

// Example without throttling
function updateStockPrice(price) {
    // Update UI with the latest stock price
    console.log(`Updating UI with stock price: ${price}`);
  }
  
  // Example with throttling
  function throttle(func, delay) {
    let isThrottled = false;
    let lastArgs, lastContext;
  
    function executeThrottled() {
      if (!isThrottled) {
        func.apply(lastContext, lastArgs);
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, delay);
      }
    }
  
    return function (...args) {
      lastArgs = args;
      lastContext = this;
      executeThrottled();
    };
  }
  
  const throttledUpdateStockPrice = throttle(updateStockPrice, 1000); // Throttle with a delay of 1000 milliseconds
  
  // Simulating rapid stock price changes (e.g., triggered by a WebSocket)
  const simulateStockPriceChanges = () => {
    setInterval(() => {
      const randomPrice = Math.random() * 100;
      throttledUpdateStockPrice(randomPrice);
    }, 200); // Simulating rapid changes every 200 milliseconds
  };
  
  simulateStockPriceChanges();
  

  /**
   *  Suppose you are working on a social media platform, and you want to limit how
   *  often a user can submit posts or comments. Throttling can be applied to prevent
   *  users from spamming the server with rapid requests.
   * => throttle is a generic throttling function that takes a function (func) and a
   *    time interval (limit). It returns a new function that will only execute func
   *    if a certain amount of time (limit) has passed since the last invocation.
   * => The event listener on the submit button calls throttledSubmitPost when the
   *    user clicks the button to submit a post. The throttle function ensures that the
   *   actual submitPost function is only called once every 2 seconds, preventing rapid
   *   submission and reducing the server load.
   */
  // Example without throttling
function submitPost(content) {
    // Simulate sending a post request to the server
    console.log(`Submitting post: "${content}"...`);
    // Actual AJAX request to the server would be here
  }
  
  // Example with throttling
  function throttle(func, limit) {
    let inThrottle;
  
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
  
  const throttledSubmitPost = throttle(submitPost, 2000); // 2000 milliseconds (2 seconds) throttling
  
  // Usage in a button click event (e.g., submitting a post)
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function () {
    const postContent = document.getElementById("postContent").value;
    throttledSubmitPost(postContent);
  });
  