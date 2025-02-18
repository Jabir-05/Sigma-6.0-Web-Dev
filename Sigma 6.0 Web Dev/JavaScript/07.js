// this , keyword

// const student ={
//     name : "jabir",
//     maths:23,
//     phy :56,
//     eng :90,
//     getAvg(){
//         console.log(this);
//         let avg =(this.maths + this.phy + this.eng)/3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }

// function getAvg(){
//     console.log(this);
// }


// try and catch 

// Arrow function 

// const sum =(a,b) =>{
//     console.log(a+b);
// }

// const mul =(a,b) =>(
//     a*b
// );


// Set Timeout

//  console.log("Hi Jabir");

//  setTimeout(()=>{
//     console.log("apna colleg");
//  }, 10000);

//  console.log("welcom to");

// Set Interval

//  let id = setInterval(() =>{
//     console.log("jabir");
// },2000);


// console.log(id);


// let id3 = setInterval(() =>{
//     console.log("Apna college");
// },3000);

// console.log(id3);



// this keyword with Arrow functions

// functions ke liye Scope wah hota hai ki unhe kaun call lr rha hai wah unke khud pr hi depend krta hai.
// Scope -> this -> calling object

// Jab ki Arrow functions ke liye Lexical Scope use hota yhi unke parent ko call jisne call kiya hai means jo parent ka jo bhi scope whi Arrow inherit kr lete hai.
// Parent -> call Scope 


//  const student  ={
//     name : "Jabir",
//     marks :345,
//     prop: this, // global Scope
//     getName: function(){
//         console.log(this);
//         return this,this.name;
//     },
//     getMarks :() =>{
//         console.log(this); // Arrow function ke liye this ka mtlb hoga parent Scope -> Window
//         return this,this.marks;
//     },

//     getInfo1: function(){
//         setTimeout( () => {
//             console.log(this); // student
//         }, 2000);
//     },
//     getInfo2 : function (){
//         setTimeout(function (){
//             console.log(this); // Window
//         },2000);
//     },
//  };



// practice Q

// const sq = (n) => {
//     return n * n * n;

// }
// console.log(sq(4));

//  let id = setInterval (()=>{
//     console.log("Jabir");
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
// },10000);
