// kaha se jaana hai -> kaha tak jana hai -> kaise jaana hai
//For
//1-50
 

console.log("Q1 print numbers 1 to 10 ")
for(let i =1; i<= 10 ; i++){
    console.log(i)
}



//kaha se jaan hai -> kabh rukna hai -> kaise jaana hai
// pata nhi kabh condition ayegi  just we know START and END
// While

console.log("Q2. print nums 10 to 1")

let i=10; 
while(i > 0){
    console.log(i);
    i--;
}


console.log("Q3. Print even numbers fron 1 to 20")
for(let i = 2; i<= 20 ; i++){
    
    if(i % 2 == 0){
      console.log(i);  
    }
    
}





console.log("Q4. Print odd numbers fron 1 to 15")
let A = 1;
while(A < 16){
    if(A % 2 == 1){
        console.log(A);
    }
    A++;
}



console.log(" Q find sum of numbers from 1 to 100")
let sum =0;
for(let i =1; i<=100; i++){
    sum = sum + i;
}
console.log(sum)


console.log("Q print numbers that all divisilbe by 3")
for(let i = 1; i< 50; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}


console.log(" Q ask the user for a number and print whether each number from 1 to that number is even or odd")
function checkNum(num){
    for(let i = 1; i<= num; i++){
        if(i % 2 === 0){
            console.log(`${i} is even number`);
        } else{
            console.log(`${i} is odd number`)
        }
    }
}
checkNum(15)



console.log(" count how many nums between 1 to 100 are divisible by both 3 and 5")
let count =0;
for(let i =1; i<=100 ; i++){
    if( i % 3 ===0 && i % 5 === 0){
        console.log(` ${i} is divisible by both 3 and 5`)
        count++;
    }
}
console.log(" total " +count)