# JS Learning
This repo contains my JavaScript learning practice. and also examples and comments 




# Chapter 6: Functions
What are Functions?
Functions are blocks of reusable logic.
Instead of repeating the same task again and again, wrap it in a function and reuse it with
different inputs.
Think of a function like a vending machine:
Input: you give money + item code
Output: it gives you the item
Logic: hidden inside

1 Function Declarations
    function greet() {
    console.log("Welcome to Sheryians!");
    }
    greet();

Parameters vs Arguments
    function greet(name) {
    console.log("Hello " + name);
    }
    greet("Harsh");
name is a parameter
"Harsh" is the argument you pass


//  function runs when we call it 

// Function declaration
function abc(){

} 
//return sends back a result to wherever the function was called
//After return , function exits




//function expression
    let abc = function(){

    }
//Functions stored in variables
// Cannot be hoisted (you can’t call them before they’re defined)





//fat arror function
    let abcd = () =>{
        
    }
//Cleaner syntax
//No own this , no arguments object





# First-Class Functions
    -JavaScript treats functions like values (like numbers, strings,  or objects)
    -First-Class Functions = Functions are treated like data

This means functions can be:
✅ 1. Stored in variables
✅ 2. Passed as arguments to other functions
✅ 3. Returned from functions
✅ 4. Stored in arrays / objects
✅ 5. Assigned to other variable

This is a BIG reason why JavaScript supports:
Callback
Higher-order functions
Functional programming
Promises, async functions, map/filter/reduce

🔥 WHY is this important?
Because once functions behave like values:
You can pass a function to setTimeout
You can write reusable logic
You can create powerful abstractions
You can return custom functions (closures)
JavaScript becomes super flexible
# code
    function sayHello() {
        console.log("Hello!");
    }
    function execute(fn) {
        fn();  // calling fn
    }
    execute(sayHello);








# Higher-Order Function
    // Takes another function as an argument
                or
    // Returns another function
    // Because JavaScript treats functions like values, we can do this.
⭐ Real-life Example (very simple)
Imagine a washing machine:
You give it a mode (quick wash / heavy wash)
It runs that mode
The machine = higher-order function
The washing mode = function passed inside
# code
//HOF returning a function
    ```js
    function outer() {  // HOF
        return function() {
            console.log("Inner function");
        };
    }












# Closure
Simple definition:
    -A closure is when an inner function remembers and uses variables from its outer function even after the outer function has finished executing.
⭐ EVEN SIMPLER MEANING:
    -Inner function has access to outer function’s variables — forever.
⭐ Why does this happen?
    -Because JavaScript does not delete the outer function’s variables
    if an inner function is still using them.
    -So the variables get “closed over” → closure.

# code
    function outer() {
        let count = 0;   // outer variable
        function inner() {
            count++;     // inner uses outer variable
            console.log(count);
        }
        return inner;    // return inner function
    }
    let fn = outer();   // outer function done, but count is saved
    fn();   // 1
    fn();   // 2
    fn();   // 3







# Hoisting — Declarations vs Expressions
⭐ What is Hoisting?
    -Hoisting means JavaScript moves declarations to the top of their scope before code runs.
    But the value is NOT hoisted, only the name.
            //-Function expressions are variables.
        // Only the variable name is hoisted, not the function value.
        // So calling them early causes error.
    //code    
    sayHi();   // ❌ Error: sayHi is not a function
    var sayHi = function() {
        console.log("Hello!");
    };

 // ✅ 1. Function Declarations (Hoisted fully)
    sayHi();   // Works
    function sayHi() {
        console.log("Hello!");
    }



#  QUESTIONS
# Q1 whats the difference between function declaration and expression in terms of hoisting
    - Ans Function declarations are fully hoisted, so you can call them before they’re defined. Function expressions are not fully hoisted, so you cannot call them before their definition.



    
