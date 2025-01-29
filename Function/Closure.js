/**
 *  A Closure is js feature thats allow inner function to access outer function scope.
 *  function along with its lexical scope is called a closure
 *  task: In personal finance applications, you often want to track income,  expenses, and calculate account balances.
 * Closures can help in creating encapsulated and secure financial trackers.
 *
 */

function greet(prefix) {
  return function (name) {
    console.log(`${prefix} ${name}`);
  };
}

const sayHello = greet("Hello");
sayHello("Rahul"); // Output: Hello Rahul

function createAccount(initialBalance) {
  let balance = initialBalance;
  console.log("Starting Balance:", balance);

  // Return an object with methods to interact with the account
  return {
    deposit: function (amount) {
      balance += amount;
      console.log(`Deposited $${amount}`);
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn $${amount}`);
      } else {
        console.log("Insufficient balance.");
      }
    },
    getBalance: function () {
      return balance;
    },
  };
}

const account1 = createAccount(1000);
const account2 = createAccount(500);

account1.deposit(200);
account1.withdraw(300);
console.log(`Account 1 balance: $${account1.getBalance()}`);

account2.deposit(300);
account2.withdraw(700);
console.log(`Account 2 balance: $${account2.getBalance()}`);
//globel scop
let hello = "world";
function main() {
  //braces scop
  let a = 4;

  function child1() {
    ///
    console.log("Child Function 1", hello); //4
  }
}
console.log(a);

function main01() {
  let a = 4;
  function child1() {
    console.log("Child Function 1", a); //4
  }
}
