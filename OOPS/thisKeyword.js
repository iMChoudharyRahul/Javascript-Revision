/**
 * Object Literals: An object literal is a comma-separated list of key-value pairs enclosed in curly braces {}. It directly creates an object with specified properties and methods.
 * this: this refer to current reference --> object or function this refer to this object and function
 *       but we talk about outside the object and function then this refer to global object
 *      Nodejs global object: {} empty array
 *      browser: its refer to window object
 */
/* Syntax of object literals
const objectName = {
    key1: value1,
    key2: value2,
    method1: function() {
      // Function logic
    },
    key3: value3
  };
  */
//example
const person = {
  firstName: "Rahul",
  lastName: "Choudhary",
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    console.log(this); //{ firstName: 'Rahul', lastName: 'Choudhary', greet: [Function: greet] }
  },
};
console.log(this); //empty object {}
person.greet(); // Output: Hello, my name is Rahul Choudhary

//Example of this
function User(username, loginCount, isLoggedIn) {
  this.username = username; //we use global object and add these values
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}
//problem of this syntax is we override the values
let user1 = User("Rahul", 12, true);
let user2 = User("Manish", 12, true);
console.log("Check user1", user1); //
console.log("Check user2", user2);
//here we create the new instance(new Copy) for every object
const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log("check the userOne:", userOne);
console.log("check the userTwo:", userTwo);
console.log(userOne.constructor);
console.log(userOne instanceof User); //true {syntax: object instanceof constructor}
