// Callback Functions:
//  A function  passed as an argument to another function and executed when a specific action occurs.
function sum(a, b) {
    console.log(a + b) //11
  }
  
  function operation(val1, val2, callback) {
    callback(val1, val2);
  }
  operation(6, 5, sum);


  //Problem-->  Callback hell --> Nested Callback calling 
//   promise -->> 

const Object ={
    key: "value" //properties
}