## Is JavaScript single threaded or multi-threaded?
    javascript is single threaded why its single threaded, it has only one call stack and one memory heap and its execute the code line by line but  Javascript also has asynchronous behavior that why its allow to perform async operation(promise, setTimeout) without any delay because this type of async operation handle by browser, not by javascript by itself. This is what allows JavaScript to be non-blocking and use async operations. 

##  Explain how JavaScript engines works?
    Javascript engine are program that run the javascript code, js engines found on web browser and other environment that host the js. Most common js engin are chrome v8 engine, spiderMonkey, javaScriptCore etc, these engine are written in c++ and used to run js code. environment that supports js like nodejs etc
   working: jsCode ---> first goes to js-parser (here check all syntax and function written in write way) ---> parser convert js code into ---> Abstract syntax tree (convert all code into a tree format) ---> after this goes to --> Interpreter (optimize compiler) ----> covert into bytecode ----> c++ engine execute this bytecode on browser.

## What is event loop in JavaScript?
   js is single threaded language, but due to its async behavior its perform task like http, promise, setTimeout like operation passes call stack to browser apis and after move micro(priority) queue (promise handler) and macro(task) queue (setTimeout), There is a gateKipper eventLoop that continuously monitoring this queue, after completing the call stack task eventLoop check if any task is there in queue if yes then first its move Priority queue task on call stack and after task queue code to execute.
   Micro queue: promises handlers like then(), catch(), finally(), and MutationObserver callbacks etc
   Macro Queue: setTimeout, setInterval, setImmediate, UI Rendering and I/O operations and HTTP request.

## Difference between var, let and const?
   ### Scope: 
        var: the scop of "var" is limited to the "Function" within which its define outside of function if we declear the scope of the var is global
        Let: The scope of "let" is limited to the "block" define by curly braces "{}" 
        const: The scope of "const" is limited to the "block" define by curly braces "{}"
   ### default value:
          var: Default value of var is undefined.(Hosting is posiable)
          let: Default value of let is uninitialized. (Hosting is Possible but in deferent zone(temporal dead zone))
          const: Default value of let is uninitialized. (Hosting is Possible but in deferent zone(temporal dead zone))
   ### Declaration:  
           var: declared without initialization(var a;) and we can update (a=10;) and also re-declared(var a = 20;);
           let: we can declared without initialization(let b;) and we can update (b=20;) but we don't re-declared (let b = 30;)(error: Cannot redeclare block-scoped variable)(but if we check on browser we can re-declare its overriding the old value)
           const: cannot declare without initialization(const c; give syntaxError) and cannot be update ones declare (c = 40; --> give TypeError: Assignment to constant variable.) cannot be re-declare.
   ### Window Object:
         var: Add itself on window object (var in the global scope adds itself to the window object)
         let: cannot add itself on window object 
         const: cannot add itself on window object
         (When you declare a variable with let or const in the global scope, it does not become a property of the window object.)

  
## Different types of data types in JavaScript?
   