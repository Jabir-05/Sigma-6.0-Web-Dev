// Functions in JS

//   function definition
//  // function  funcName(){

//     do something 
//  }


//  function calling (Using  the function)

//   funcName();



// example

// function hello(){
//     console.log("hello");
// }

// hello ();

// function print1to5(){
//     for(i =1; i<=5;i++){
//         console.log(i);
//     }
// }

// print1to5();


// function isAdult(){
//     let age = 80;
//     if(age <=80){
//         console.log("adult");

//     }
//     else{
//         console.log("not adult");
//     }
// }
// isAdult();

// function printPoem(){
//     console.log("twikle twikle litte star ");

// }

// printPoem();


// function dice(){
//     let rand =Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }

// dice();



// function with arguments

// function printName(name){
//     console.log(name);
// }
// printName("jabir");



// function avg(a,b,c){
//     let calavg =(a+b+c)/3;
//     console.log(calavg);

// }
// avg(2,4,6);


// function table(n){
//     for(let i =n; i<=n*10; i+=n){
//         console.log(i);
//     }

// }
// table(3);


// function getSum (n){
//     let sum = 0;
//     for (let i =1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }


// let arr =["hello","hey","bye","!"];
// function concat(arr){
//     let result;
//     for(let i=0; i<arr.length;i++){
//         result += arr[i];

//     }
//    return result;
// }


// Scope :-determine the accessibility of variable,object and functions from different parts of the code 

// (1):- Function  Scope :- variable defined inside a function are not accessible (vesible) from outside the function .


// let sum = 54; // Global Scope
// function calSum(a,b){
//     let sum = a+b; // function Scope
//     console.log(sum);
// }
// calSum(1,7);
// console.log(sum);



//(2):- Block Scope :- variables declared inside a {} block cannit be accessed from outside the block .


// {
//     let a= 25;
//     console.log(a); // block Scope
// }


//(3):- Lexical Scope :- a variable defined outside a function can be accessible inside another function defined after the variable declaration.

// function outerFunction(){
//     let x= 5;
//     let y=10;

//     function innerFunction(){ // function Scope
//         console.log(x);
//     }
//     innerFunction();
// }


// Practice 

// let greet ='hello'; // Global Scope

// function changeGreet(){
//     let greet ='namaste';
//     console.log(greet);
//     function innerGreet(){ // Fuction Scope
//         console.log(greet); // Lexical Scope
//     }
// }

// console.log(greet);
// changeGreet();


// Function Expressions

//  let name ='jabir';

//  let sum = function (a,b){
//     return a+b;

//  }


// Higher Order Functions 

// A function that does one or both:
// 1:- takes one or multiple functions as arguments.
// 2:- return a function.


// function multipleGreet(func, count) { // higher order function
//     for (let i = 1; i <= count; i++) {
//         func();
//     }

// }
// let greet = function () {
//     console.log("hello");
// }
// multipleGreet(greet, 10);


// function oddEvenTest(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2 == 0));
//         }
//         return odd;
//     }
//     else if(request == "even"){
//         let even = function (n){
//             console.log(n%2 == 0);
//         }

//         return even;
        
//     }else{
//         console.log("wrong request");
//     }
// }

// let request = "odd";


// Methods :- action that can be performed on an object.


//  const calculator = {
//     num: 55,
//     add: function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mul: function (a,b){
//         return a*b;
//     }
//  };



