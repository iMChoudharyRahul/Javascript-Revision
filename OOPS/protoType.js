/**
 * Prototype: In js every properties and methods some predefined properties add when we use that methods
 */

//Object Prototype
//example
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);
// console.log("Chai", chai.increment());//
// console.log("Chai", chai.printMe());//
// console.log("tea", tea.printMe());//

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Create instances
const rahul = new Person("Rahul", 25);
const ankit = new Person("Ankit", 30);

rahul.greet(); // Output: Hello, my name is Rahul
ankit.greet(); // Output: Hello, my name is Ankit
