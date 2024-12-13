/**
 * The call, apply, and bind methods are essential features in JavaScript for manipulating the context and arguments of functions.
 * function have three method
 * 1. Call: 
 * 2. Apple
 * 3. Bind
 * 
 * Task: Suppose you're developing an e-commerce platform, and you have a Product object with a method 
 * for calculating the total price based on quantity and applying a discount. 
 * You might have different use cases where you want to calculate the total price for a product with different parameters.
 * Solution:  we have multiple product object and they have diff-diff price, quantity and discount 
 *      for every product object we don't need write again and agin same function so we use call, apply and bind method 
 */
const Product = {
   name: "lenova laptop",
   price: 40000,
   calculateTotal: function(quantity, discount){
      return (this.price * quantity) * (1 - discount);
   }
};
// Use 'call' to calculate the total price with custom context and arguments
const customProduct = {
  name: "IPhone 14 plus",
  price: 60000,
}

//we don't need to write again and calculateTotal using Call  
const TotalProductPrice = Product.calculateTotal(4, 0.2);
console.log(`Total for ${Product.name}: $${TotalProductPrice}`);
const TotalPrice = Product.calculateTotal.call(customProduct, 2, 0.1);
console.log(`Total for ${customProduct.name}: $${TotalPrice}`);

//Using Apply Method
const customPrice = Product.calculateTotal.apply(customProduct, [2, 0.1]);
console.log(`Total for ${customProduct.name}: $${customPrice} using apply method`);

//Using Bind Method
const useBind = Product.calculateTotal.bind(customProduct);
let total = useBind(2, 0.1);
console.log(`Total for ${customProduct.name}: $${total} using bind method`);


//Call(this, argumets)--> product.call(cutomProduct, 2, 1) 
//Apply --> (this, [2, 1]);
//bind --> (this) --> variable(argument)

//call by value   vs call by reference
function(a=1, b=4, c=5) --> function value change(a=4, b=5, c=6)  will not affect outside of it
function(object, array) --> refereance --> function  change --> actual object and array ushme bhi update hoga