/**
 * Inheritance:  Inheritance allows a class to use properties and methods from another class.
   You use the extends keyword to make one class inherit from another.

   super Keyword: The super keyword is used in two cases:
          1. To call the constructor of the parent class.
          2. To access parent class methods.
    Inside the constructor of a child class, super() must be called before using this.
     It allows the child class to access and override parent methods.

 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  static helloBuddy() {
    console.log("this method not access the parent class");
  }
}

// Child class
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call the parent class constructor--> we can access the parent properties using super keyword
    this.grade = grade;
  }

  // Additional method
  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

// Create a Student instance
const rahul = new Student("Rahul", 25, "12th");
rahul.greet(); // Output: Hello, my name is Rahul.
rahul.study(); // Output: Rahul is studying in grade 12th.
console.log("Check the static method:", rahul.helloBuddy()); //TypeError: rahul.helloBuddy is not a function
