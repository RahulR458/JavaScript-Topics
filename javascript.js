        // Reduce, Map, filter, foreach

// arrNum=[2,4,6,7,8,1]

// let a=arrNum.reduce((b,c)=>b+c)
// console.log(a)

// let b=arrNum.map((c)=>c*2)
// console.log(b)

// let c=arrNum.filter((arrNum)=>arrNum%2==1)
// console.log(c)

// sum=0
// arrNum.forEach((value)=>sum+=value)
// console.log(sum) 

// _______________________________________________
 
        // map

// const arr=[5,1,3,2,6]; 

// const output=arr.map((x)=>x*5);
// console.log(output);

// _______________________________________________

       // reduce

// const arr=[5,1,3,2,6];

// const output=arr.reduce(function(acc,curr){
//     acc=acc+curr;
// },0);
// console.log(output);

// _______________________________________________

       //For Each

// for(let i=0; i<globalPlayer.length; i++){
//     console.log(globalPlayer[i].name);
// }

// globalPlayer.forEach(function (value,index,array){
    // console.log(value.name)
// });

// globalPlayer.forEach((value,index,array)=>console.log(value.name));

// _______________________________________________

        //Map Method


// const globalPlayer = [
//     {
//     id: 0,
//     name: "Rahul",
//     age: 25,
//     },
//     {
//     id: 1,
//     name: "Lallu",
//     age: 20,
//     },
//     {
//     id: 2,
//     name: "Ramu",
//     age: 30,
//     },
// ];

//    const newArr = globalPlayer.map((value) => value.name);
//    console.log(newArr);

// // const newArr1=[]
// for(let i=0; i<globalPlayer.length; i++){
//     newArr1.push(globalPlayer[i].name)
// }
//  console.log(newArr1);

// ______________________________________________________________________________________________

        //Filter 

//  const globalPlayer=[
//     {
//         id : 0,
//         name : "Rahul",
//         age : 20,
//     },
//     {
//         id : 1,
//         name : "Lallu",
//         age : 20,
//     },
//     {
//         id : 2,
//         name : "Ramu",
//         age : 30,
//     },
// ]


// const newArr=globalPlayer.filter((value)=>value.age === 20 && value.id===0);
// console.log(newArr);

// ______________________________________________________________________________________________

            //Reduce

// const numArr=[11,22,33,44,55,66,77,88]

// // total=0
// // for(let i=0;i<numArr.length;i++){
// //     total=total+numArr[i];
// // }
// // console.log(total)

// newArray=numArr.reduce((total,value)=>total+value,0);
// console.log(newArray);

// ______________________________________________________________________________________________

                //Find

// const globalPlayer=[
//     {
//         id : 0,
//         name : "Rahul",
//         age : 25,
//     },
//     {
//         id : 1,
//         name : "Lallu",
//         age : 20,
//     },
//     {
//         id : 2,
//         name : "Ramu",
//         age : 30,
//     },
// ]

// const objArr = globalPlayer.find((value) => value.name === "Lallu");
// console.log(objArr);

// ______________________________________________________________________________________________

        //Sort

// const numArray= [3,2,5,1,7,8];
// const sortedNum = numArray.sort((a,b)=>a-b);
// console.log(sortedNum);

// const sortNum = numArray.sort((a,b)=>b-a);
// console.log(sortNum);

// ______________________________________________________________________________________________

        //ES10 Syntax , Flat (Infinity)

// const numArray= [3,2,[6,4],5,1,7,8];
// console.log(numArray.flat())

// const numArray= [3,2,[6,4],5,1,[5,3[9,6],3],7,8];
// console.log(numArray.flat(Infinity));

// ______________________________________________________________________________________________

        //Optional chaining

//  const globalPlayer={
//         id : 0,
//         name : "Rahul",
//         age : 20,
//         company : {
//             comp_name : "Google",
//         }
//     };
// // if(globalPlayer && globalPlayer.company && globalPlayer.company.comp_name){
// //     console.log(globalPlayer.company.comp_name);
// // }

// if(globalPlayer?.company?.comp_name){
//     console.log(globalPlayer.company.comp_name);
// }

// ______________________________________________________________________________________________

        // "use strict";

// x=3.14;

// function add(x, y) {
//     return x + y;
// }
// let sum = add;
// let result = sum(10, 20);
// console.log(result); 

//-------------------------------------
    
// function sum(x, y) {
//     return x + y;
// }

// let assign= sum;

// function avg(x,y, z) {
//     return z(x, y) / 2;
// }
// let res = avg(10, 20, assign);
// console.log(res);

// ______________________________________________________________________________________________

            //Callback

// function add(num1,num2,callback){
//     let err=false
//     if(num1==0){
//         err=true
//     }
//     callback(num1+num2,err)
// }
// function multiply(num1,num2,callback){
//     callback(num1*num2)
// }
// function div(num1,num2,callback){
//     callback(num1/num2)
// }

// add(10,20,(sum,err)=>{
//     if(err){
//         console.log("First Number is zero")
//     }else{
//         console.log(sum)
//         multiply(sum,sum,(product)=>{
//             console.log(product)
//             div(product,10,(result)=>{
//                 console.log(result)
//             })
//         }) 
//     }
// })

// ____________________________________________________________________________________________

        //Promise

// const Promise= require('promise')

// function add(num1,num2){      
//     return new Promise((resolve,reject)=>{
//         if(num1==0){
//             reject("First number is zero")
//         }
//         resolve(num1+num2)
//     })
// }

// add(10,20).then((sum)=>{
//     console.log(sum)
    
// })
// .catch((err)=>{
//     console.log(err)
// })

// ____________________________________________________________________________________________

        //Basic Array Methods 

// let array1 = [1,2,3,4,5,6];

// array1.pop();
// array1.push(9);
// array1.shift();
// array1.unshift(10);
// array1.reverse();
// array1.splice(0,3,"RAHUL");
// let newarray = array1.slice(1,4);
// console.log(newarray);

// console.log(array1)

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
             

// _____________________________________________________________________________________________


        //throw

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero"); // Throw a custom error if b is zero
//   }
//   return a / b;
// }

// try {
//   let result = divide(10, 0);
//   console.log(result);
// } catch (error) {
//   console.error(error.message); // Logs "Cannot divide by zero"
// }

// _____________________________________________________________________________________________

        //Math

// console.log(Math.round(3.4));
// console.log(Math.ceil(3.4));
// console.log(Math.ceil(3.6));
// console.log(Math.ceil(-3.6));
// console.log(Math.floor(3.4));
// console.log(Math.pow(2,3));
// console.log(Math.min(3,4,5));

// let num = 5.9;
// let floatNum = Number(num,decimal);
// console.log(floatNum); // 5.0

// let num = 5;
// let floatNum = parseFloat(num);
// console.log(floatNum); // 5.0

// _____________________________________________________________________________________________

        // toFixed()

// let num = 3.14159265;
// let roundedNum = num.toFixed(2);
// let newNum = parseFloat(roundedNum);
// console.log(newNum); // Output: 4.14

// _____________________________________________________________________________________________

        //Call

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person1 = {
//     firstName: "John",
//     lastName: "Doe"
//   }
  
//   person.fullName.call(person1); // Returns "John Doe"

// _____________________________________________________________________________________________

        //Apply

// function sum() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

// const result = sum.apply(null, [1, 2, 3]);

// console.log(result); // Returns 6

// -----

// const numbers = [5, 6, 7, 8, 9];

// const max = Math.max.apply(null, numbers);

// console.log(max); // Returns 9


// _____________________________________________________________________________________________

        // Bind

// const module = {
//   x: 42,
//   getX: function() {
//     return this.x;
//   }
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX()); // 42


// _____________________________________________________________________________________________

        // Instance of

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const john = new Person("John", 30);
// console.log(john instanceof Person); // Output: true


// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const john = new Person("John", 30);
// console.log(john instanceof Person); // Output: true

// const str = "Hello World!";
// console.log(str instanceof String); // Output: false


// _____________________________________________________________________________________________

        // do while

// let input;
// do {
//   input = prompt("Please enter a number:");
// } while (isNaN(input));

// alert("You entered: " + input);



// let totalPrice = 0;
// let price;

// do {
//   price = parseFloat(prompt("Enter the price of the next item:"));

//   if (isNaN(price) || price <= 0) {
//     alert("Invalid price entered. Please enter a positive number.");
//   } else {
//     totalPrice += price;
//   }
// } while (confirm("Do you want to add another item?"));

// alert("The total cost of your items is $" + totalPrice.toFixed(2));

// _____________________________________________________________________________________________

        // local storage and session storage

        // local storage

// localStorage.setItem("username","RAHUL");
// var username=localStorage.getItem("user name:");
// console.log(username);


// _____________________________________________________________________________________________

        // deconstructing

// let a=["hello","hai","super"];
// let [c,d,e]=a;
// console.log(d);

// _____________________________________________________________________________________________

        // setinterval and cancelling set interval

// let intervalId;

// Start the interval

// intervalId = setInterval(function() {
//   console.log('This will run every 2 seconds');
// }, 2000);

// // Cancel the interval after 10 seconds

// setTimeout(function() {
//   clearInterval(intervalId);
//   console.log('Interval cancelled');
// }, 1000);

// _____________________________________________________________________________________________

        // spread operator

// const student = {
//   name: "John",
//     math: 80,
//     science: 90,
//     english: 95

// };

// const b={...student};
// console.log(b);

// _____________________________________________________________________________________________


        // for of

// let a=[1,2,3,4,5];
// for(let x of a){
//     console.log(x*2);
// };

// _____________________________________________________________________________________________

        // reversing a string


// let a="hello";
// let reversed=a.split('').reverse().join('');
// console.log(reversed);

// _____________________________________________________________________________________________


// 'hello'  'h','e','l','l','o'

//checking variable is an array-------------

// let a=[1];
// console.log(Array.isArray(a));

//checking variable is an array-------------

// let a=[1];
// console.log(a instanceof Array);

//checking object is empty-------------

// let a={};
// if(Object.keys(a).length===0)
// {
//     console.log("empty");
// }
// else
// {
// console.log("not empty");
// }

// let a={name:"balaji"};
// if(!('name' in a)){
//     console.log("empty");

// }
// else{
//     console.log("not empty");
// }

//checking Arrray is empty-------------


// let a=[];
// if(a.length===0){
//     console.log("empty");

// }
// else{
//     console.log("not empty");
// }

// _____________________________________________________________________________________________

//string methods


  // let a= "hello";
// console.log(a.length);
// console.log(a.toUpperCase();
// console.log(a.toLowerCase());
// console.log(a.indexOf("o"));
// console.log(a.substr(1,1));  // .substr(start,length);

// _____________________________________________________________________________________________

//promise

// const promise = new Promise((res,rej)=>{
//     let a=1+5;
//     if(a===10){
//         res("success");

//     }
//     else{
//         rej("failed");
//     }
// })
// promise
// .then((correct)=>{
// console.log("true");
// })
// .catch((wrong)=>{
//     console.log("false");
// })

// _____________________________________________________________________________________________


//math

// console.log(Math.round(3.4));
// console.log(Math.ceil(3.4));
// console.log(Math.ceil(3.6));
// console.log(Math.ceil(-3.6));
// console.log(Math.floor(3.4));
// console.log(Math.pow(2,3));
// console.log(Math.min(3,4,5));

// _____________________________________________________________________________________________

//rest

// let a=[1,2,3,4];
// let b=[...a];
// console.log(b);

// _____________________________________________________________________________________________

//currying

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(10)(20)(30));

// _____________________________________________________________________________________________

//generator

// function* a(){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let b=a();

// console.log(b.next().value);
// console.log(b.next().value);
// console.log(b.next().value);
