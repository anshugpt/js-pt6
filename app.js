//* Function in JS
// syntax :-
// function funcName(){
    // Do soemthing
// } 

// We need to call a function to use it
// calling a function :-
// funcName();

function hello(){     //* makeing a function
    console.log("Hello!"); 
}

// hello();  //* using a function

function loopPrint(a, b){ //* these are called parameters 
    for (let i=a; i<=b; i++){
        console.log(i);
    }
}

// loopPrint(10, 20);  //* there are attributes which replace parameters

function isAdult(){
    let age = prompt("What's your age?")
    age = parseInt(age)
    if (age < 18){
        console.warn("You are not adult!!");
    } else if (age >= 18){
        console.log("You are an Adult!");
    } else {
        console.error("Invalid input!");
    }
}

// isAdult();

//* Practice Questions
// function to print poem

function poem(){
    console.log("Twinkle Twinkle little star,");
    console.log("How you wonder waht you are,");
    console.log("What's above the world so high,");
    console.log("It's a Diamond in the sky!");
}

// poem();

// function to display the value of dice

function rollDice(){
    let dice = Math.floor(Math.random() * 6) + 1
    console.log(`Dice number is : ${dice}`);
}

// rollDice();

//* Function with arguments
// Value we pass to the function
// syntax :-
// function funcName(arg1, arg2, .....){
    // Do something
// }


function sayHello(name){ //* Parameter -> name 
    console.log(`Hello ${name}`);
}
// sayHello("Anshu"); //* "Anshu" -> Argument -> now stored in name parameter.

//* Order is very important in function arguments
// we have to pass arguments orderwise!

function userInfo(name, age, city){
    console.log(`Hi ${name}, You are ${age} years old and you live in ${city}`);
}
// userInfo("Anjali", 18, "Patna");

function sum(a, b){
    console.log(`Sum is ${a + b}`);
}
// sum(144, 100);

//*  Practice Question
//* Function that give average of 3 numbers

function avgOf(a, b, c){
    console.log(`Average of ${a},${b} and ${c} is : ${(a+b+c)/3}`);
}
// avgOf(2, 3, 4);

//* function that print multipication table of number

function multTable(n){
    for(let i=1; i<=10; i++){
        console.log(`--> ${n*i}`);
    }
}
// multTable(5);

//* Return keyword
// return the value but not print the value
// very important keyword

function sumOf(a, b){
    return a + b;
}
// sumOf(2, 3); --> this written code is equal to 5 let's check :-
// console.log(sumOf(2, 3)); --> output is 5
// we store it in variable
//* what if we want to add 3 num :-
//* sumOf(sumOf(2, 4), 5); -> first sum 2+4 then 2+4 added with 5

//* After return keyword no code will execute :-
// function add(a, b){
//     console.log("Hi"); //* This code will print! :)
//     return a + b;
//     console.log("Hello"); //* -> this code will never print :(
// }

//* Practice Question 

//* Function that return the sum of numbers from 1 to n

function addFrom1To(n){
    let sum = 0
    for(let i=1; i<=n; i++){
        sum += i
    } return sum;
}
// console.log(`The Total Sum is ${addFrom1To(20)}`);

//* Function that return the concatenations of all strings in an array

function concArray(arrName){
    let conc = ""
    for(let i=0; i<arrName.length; i++){
        conc += arrName[i]
    } return conc;
}
// let student = ["Anshu", "Anjali", "Anushka"]
// console.log(`The concatnation is : ${concArray(student)}`);


