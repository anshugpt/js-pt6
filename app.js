//* Function in JS
// syntax :-
// function funcName(){
    // Do soemthing
// } 

// We need to call a function to use it
// calling a function :-
// funcName();

// function hello(){     //* makeing a function
//     console.log("Hello!"); 
// }

// hello();  //* using a function

// function loopPrint(a, b){ //* these are called parameters 
//     for (let i=a; i<=b; i++){
//         console.log(i);
//     }
// }

// loopPrint(10, 20);  //* there are attributes which replace parameters

// function isAdult(){
//     let age = prompt("What's your age?")
//     age = parseInt(age)
//     if (age < 18){
//         console.warn("You are not adult!!");
//     } else if (age >= 18){
//         console.log("You are an Adult!");
//     } else {
//         console.error("Invalid input!");
//     }
// }

// isAdult();

//* Practice Questions
// function to print poem

// function poem(){
//     console.log("Twinkle Twinkle little star,");
//     console.log("How you wonder waht you are,");
//     console.log("What's above the world so high,");
//     console.log("It's a Diamond in the sky!");
// }

// poem();

// function to display the value of dice

// function rollDice(){
//     let dice = Math.floor(Math.random() * 6) + 1
//     console.log(`Dice number is : ${dice}`);
// }

// rollDice();

//* Function with arguments
// Value we pass to the function
// syntax :-
// function funcName(arg1, arg2, .....){
    // Do something
// }


// function sayHello(name){ //* Parameter -> name 
//     console.log(`Hello ${name}`);
// }
// sayHello("Anshu"); //* "Anshu" -> Argument -> now stored in name parameter.

//* Order is very important in function arguments
// we have to pass arguments orderwise!

// function userInfo(name, age, city){
//     console.log(`Hi ${name}, You are ${age} years old and you live in ${city}`);
// }
// userInfo("Anjali", 18, "Patna");

// function sum(a, b){
//     console.log(`Sum is ${a + b}`);
// }
// sum(144, 100);

