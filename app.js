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


//* Scope
// Scope determine the accessibility of Variable, Objects and Functions from  different part of the code (kisko kaha use kiya jata hai)

//* Function Scope
// Variable defined inside a function are not accessible (visible) out side the function (more specific than globle scope)
// Function k andar ham globle scope variable ko use kar sakte hai

//* Block Scope
// Variable declared inside a {} block cannot be accessed from outside the block
// if use (var) then we can access but use of (var) is not good thing

// for (let i=1; i<=5; i++){
//     console.log(i);   //* i is only accessed inside the block not outside
// }
// console.log(i); //* --> output -> error > i is not defined

//* Lexical Scope
// a variable defined in outer function can be accessible in inner function defined after the variable declaration
// not possible in opposite form
// variable in inner and try to access in outer is not possible
// we can't even use inner function directly because its is function scope


//* Function Expression 
// we can store our function in variable
// it is a name less function
//* We can do everyting we do with variables (Change, update....)

// syntax :-

// const variable = function (){
     // Do something
// }
const addition = function(a, b){
    return a + b;
}

//* Higher Order function
// A function that does one or both:
// -> takes one or multiple function as arguments
// -> returns a function

//* Take function as arguments

// Example :-

function multiFunc(func, n){ //* higher order function
    for(let i=1; i<=n; i++){
        func();                  //* call func() n number of times
    }
}

const greet = function(){  //* normal function
    console.log("Hello");
}

// multiFunc(greet, 5); //* function as an arguments

//* return a function

// Let's make a factory function which return a coustom function 

function oddEvenTest(request){
    if (request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    } else if (request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    } else {
        console.error("Wrong Request!");
    }
}
// let func = oddEvenTest("even"); //* store that value in a variable
// func(12); //* call to check


//* Methods
// jo function object k andar defined hote hai unko ham methods kehte hai

const calculator = {
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    multi: function(a, b){
        return a * b;
    },
    div: function(a, b){
        return a / b;
    },
    modulo: function(a, b){
        return a % b;
    }
};

// console.log(calculator.add(6, 3));

//* Methods Shorthand :-

const calcu = {
    add(a, b){
        return a + b;
    },
    sub(a, b){
        return a - b;
    },
    div(a, b){
        return a / b;
    },
    multi(a, b){
        return a * b;
    }
};

// console.log(calcu.multi(5, 5));

//* Practice Question

//* Qs-1
// function that return array elements larger than a number

const qs1 = function(inNum){
    const arrNumber = [2, 6, 9, 13, 23, 45, 17]
    let result = []
    for(let i=0; i<arrNumber.length; i++){
        if(inNum < arrNumber[i]){
            result.push(arrNumber[i])
        } else {
        }
    }
   return result;
}

// console.log(qs1(10));

//* Qs-2
//TODO look to the solution

//* Qs-3

function country(conArr){
    let result = ""
    for(let i=0; i<conArr.length; i++){
        for(let j=conArr.length - 1; j>=0; j--){
            if(conArr[i].length > conArr[j].length){
                result = conArr[i]
            } else {}
        }
    } return result;   
}

// let qs3 = ["india", "america", "china", "republic of india"]
// console.log(country(qs3));

//* Qs-4 

function countVovle(str){
    let count = 0
    for(let i=0; i<str.length; i++){
        if(str[i] == "a" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "e"){
            count++;
        }
    } return count;
}

// let vov = "anshu gupta"
// console.log(countVovle(vov));

//* Qs-5
//TODO do it your self if can't then look at solution
