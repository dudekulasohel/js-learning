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




// default
//a = 1 → default parameter
function mul(a= 1, b=2){
    return a * b;
}
mul();







//REST
//...nums → rest parameter
function ssum(...val){
    console.log(val)
}
ssum(1,2,3,4,5,6,76,7)
// all parameters stired in val 






//SPREAD
function add(a, b, c) {
    return a + b + c;
}
let nums = [10, 20, 30];
// Spread operator opens the array into separate values:
console.log(add(...nums));   // Output: 60
//...nums (in call) → spread operator
//It expands (opens) an array into individual values.





//RETURN
 function abbb(){
    return 12;
 }
 let valuee = abbb();
 console.log(valuee) // 12



 //# First-Class Functions
    //-JavaScript treats functions like values (like numbers, strings,  or objects)
    //-First-Class Functions = Functions are treated like data
//     This means functions can be:
// ✅ 1. Stored in variables
// ✅ 2. Passed as arguments to other functions
// ✅ 3. Returned from functions
// ✅ 4. Stored in arrays / objects
// ✅ 5. Assigned to other variable
 function sayHello() {
        console.log("Hello!");
    }
    function execute(fn) {
        fn();  // calling fn
    }
    execute(sayHello);






//Higher-Order Function
// Takes another function as an argument
// Returns another function
// Because JavaScript treats functions like values, we can do this.
//  2. HOF returning a function
function outer() {  // HOF
    return function() {
        console.log("Inner function");
    };
}










//  PURE vs IMPURE function

let a = 33;
//PURE function aisa jo fnc jo ki baahar ki value ko na badle
function aab(){
    console.log("Pure function")
}


//IMPURE function jo baahar ki value ko badal de 
function aabb(){
    a++;
}






//****
//CLOSURES
// ek fnc jo return kare ek aur func aur return hone waala func hamesha 
//use kare ga parent func ka koi variable
function abcdd(){
    let b = 2;
    return function(){
        b++;
        console.log(b)
    }
}





//LEXICAL SCORING
// accesing the variables inside the funtion









//⚡ IIFE – Immediately Invoked Function Expression
(function () {
    console.log("Runs immediately");
})();








//Hoisting — Declarations vs Expressions
//❌ 2. Function Expressions (NOT hoisted fully)
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




//Q1  using rest
function scores(...runs){
    console.log(runs)
}
scores(10,100,24,50,100);
