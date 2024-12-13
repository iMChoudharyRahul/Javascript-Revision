/**
 * IIFE => (Immediately Invoked Function Expression) is type of function that run as soon as posible after creation.
 * IIFE in JavaScript is a way to encapsulate code and create a private scope.
 * It is more commonly used for code organization and reducing global scope pollution.
 */

let findPrivateKey = (() => {
  let privateKey = "Secure Our Data";

  //Get function to  return our private key
  let getPrivateKey = () => {
    return privateKey;
  };
  //Set a new private key
  let setPrivateKey = (newKey) => {
    privateKey = newKey;
  };
  return {
    getPrivateKey,
    setPrivateKey,
  };
})();
console.log(findPrivateKey.getPrivateKey());
findPrivateKey.setPrivateKey("update our data");
console.log("New Private Key is: ", findPrivateKey.getPrivateKey());

//M02
(() => {
  let privateKey = "Secure Our Data";

  //Get function to  return our private key
  let getPrivateKey = () => {
    return privateKey;
  };
  //Set a new private key
  let setPrivateKey = (newKey) => {
    privateKey = newKey;
  };
  //Note: This Code Run only on browser its give error on nodejs there not any window object
  //if we want on nodejs then we need to be use module.export this function
  window.findKey = {
    getKey: getPrivateKey,
    setKey: setPrivateKey,
  };
})();

console.log("Old Private Key: ", findKey.getKey());
findKey.setKey("update our data");
console.log("New Private Key is: ", findKey.getKey());

// useEffect(()=> {
//   (){
//     const api = url;
//     fetch(api).then((response)=> response.json()).then((data)=>{
//       console.log(data);
//     })
//   }();
// }, []);

var message = "Hello, IIFE!";
console.log(message);

(function abc() {
  console.log(Hello )
})()

for(var i = 0; i<5; i++){
  setTimeout(()=>{
      console.log(i);
  }, i*1000);
};
//
for(var i = 0; i<5; i++){
  setTimeout(()=>{
      console.log(i);
  }, i*1000);
};

for(var i=0; i<5; i++){
  (setTimeout(()=>{
    console.log(i);
}, i*1000))()
}

//IIFE
//
function abc(x){
console.log(x);
}
abc(()=> {
  var x = 10;
  return x;
});
let array = [1, 2, 4, 5, 6] * 2;
map, fillter, reduce, ==> callback function
array.map((item, index, array)=> {
  console.log(item);
  //opration
  return item * 2;
});//new Array



