// Array methods 

// 1:- forEach :- arr.forEach(some function definition or name);

// let arr =[1,2,3,4,5];

// arr.forEach(function (el){
//     console.log(el);
// });

// function print (el){
//     console.log(el);
// }

// arr.forEach(print);


// Map  :- let newArr =arr.map (some function definition or name);


// let num =[1,3,5];

// let double = num.map((el) => {
//     return el *el;
// });

// let students = [{
//     name : 'jabir',
//     marks :96
// },{
//     name: 'abhishek',
//     marks:92
// },{
//     name :'prasidh',
//     marks: 72
// }];

// let gpa = students.map((el) =>{
//     return el.marks /10;
// });

// Filter :- let newArr = arr.filter (some function definition or name );

// let num = [2,3,4,5,6,7,8];
// let even = num.filter((num)=> (num % 2 == 0));


// Every :- return true if every element of array gives true for some function.Else returns false.
// arr.every(some function definition or name);

// [1,2,3,4].every((el) => (el %2 == 0));



//reduces :- arr.reduce(reducer function with 2 variables for (accumulator, element));

// let num=[1,2,4,5].reduce((res,el) => {
//     console.log(res);
//     return res +el;
// });
// console.log(num);


// let arr = [2,3,4,5,79];

// let max =-1;

// for(let i=0; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }

// console.log(max);

// let max =arr.reduce ((max,el) => {
//     if(max < el){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
//  console.log(max);


// practice Qs

// let num =[20,30,40,570,890];
//  let ans =num.every((el) => el %10 == 0);
// console.log(ans); 


// let arr =[1,2,3,4,5];

// let min = arr.reduce ((min, el)  =>{
//     if(min > el){
//         return el;
//     }
//     else{
//         return min;
//     }
// });
// console.log(min);



// Default Parameters

// function func (a,b =2){  // don't use default parameter in  starting always use in end 
//     return a+b;
// }

// func(2);



// Spread(...) :- Expands an iterable into multiple values

// let arr =[1,2,3,4,7,8,9,0,5,4,9];

//  console.log(Math.min(...arr));



// Spread in object literals

//  let data ={
//     email:"jabirimteyaz123@gmail.com",
//     pass: 1234,
//  };

//  let dataCopy ={...data};


// Rest :- allows a function to take an indefinite number of argumnets and bundle them in an array 

// function sum(...args){
//     for(let i=0; i<=args.length;i++){
//         console,console.log("you gave us:", args[i]);
        
//     }
// }

// function min (a,b,c,d){
//     console.log(arguments);
//     console.log(arguments.length);
// }

// function sum (...args){
//     return args.reduce((sum,el) => sum + el);
// }


// Destructuring :- Storing values of array into multiple variavbles 

// let names = ['jabir','prasidh','abhisek','abs','yxy'];

// let [winner,runner,...other] = names;


// Destructuring for objects 

// const students ={
// name:"jabir",
// class: "b.tech",
// age : 23,
// subjects :['phy','toc','doc','dsa'],
// username:"jbr",
// pass:"54h",
// };

// let {username,pass,name,subjects }=students;




