// _____________________________________Functons_______________________________________________
// ____________________________________________________________________________________________


        // Function declarations

// function sum(a,b){
//     c=a+b;
//     console.log(c);
// }
// sum(2,3);

// ____________________________________________________________________________________________

       //Arrow Function

// sum=(a,b)=>(a+b);
// x=sum(2,4);
// console.log(x);

// sum=(a,b)=>(a+b);
// console.log(sum(2,3));     
        
// ______________________________________________________________________________________________

       // Function Expression

// const subtract = function(a, b) {
//     return a - b;
// };

// console.log(subtract(8, 3)); // Output: 5

// ______________________________________________________________________________________________

        // Immediately Invoked Function Expression (IIFE)

// (function() {
//     console.log("I am an IIFE!");
// })();
// // Output: I am an IIFE!

// ______________________________________________________________________________________________

        // Generator Function

// function* generateSequence() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const generator = generateSequence();
// console.log(generator.next().value); // Output: 1
// console.log(generator.next().value); // Output: 2

// ______________________________________________________________________________________________

        // Anonymous Function
        
// const greet = function(name) {
//     console.log("Hello, " + name + "!");
// };

// greet("Alice"); // Output: Hello, Alice!
        
// _____________________________________________________________________________________________

        // Callback Function

// function fetchData(url, callback) {
//     // Assume async operation to fetch data
//     const data = "Some data";
//     callback(data);
// }

// fetchData("https://example.com", function(data) {
//     console.log("Data received:", data);
// });
// // Output: Data received: Some data

// _____________________________________________________________________________________________

        // Higher-Order Function

// function operate(operator) {
//     return function(a, b) {
//         return operator(a, b);
//     };
// }

// const addition = operate((a, b) => a + b);
// console.log(addition(4, 7)); // Output: 11

// _____________________________________________________________________________________________

        // Constructor Function

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const john = new Person("John", 25);
// console.log(john.name); // Output: John

// _____________________________________________________________________________________________

        // Recursive Function

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5)); // Output: 120


