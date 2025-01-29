/**
 * Class: A class in JavaScript is a template for creating objects.
 * Classes are syntactic sugar over JavaScript’s prototype-based inheritance.
 * inside a class a constructor are calling when the object is created
 * inside the class all methods are we created automatically add on prototype.
 *
 */
//syntax of class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method inside the class
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating an object
const rahul = new Person("Rahul", 25);
rahul.greet(); // Output: Hello, my name is Rahul and I am 25 years old.
