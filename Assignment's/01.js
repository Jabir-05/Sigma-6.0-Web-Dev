// Assignmnet 03

// let arr = [1,2,9,4,5,6];
// let n= 4;

// let ans = arr.slice(0,n);
// console.log(ans);

// let arr = [1,2,9,4,5,6];
// let n= 4;

// let ans = arr.slice(arr.length-n);
// console.log(ans);




// Assignment 04

//Q1

// let arr =[1,2,3,4,5,6,2,3];
// let num =2;
// for(i=0;i<arr.length;i++){
//     if(arr[i]== num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);


//Q2

// let number =805151;
// let count =0;
// let copy =number;

// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(copy);

//Q3 

// let number =287152;
// let sum =0;

// let copy = number;

// while(copy>0){
//     digit = copy %10;
//     sum+= digit;
//     copy = Math.floor(copy/10);
// }
// console.log(copy);

//Q4

// let  n =prompt("enter a number");
// let fact = 1;
// for(i =1; i<=n; i++){
//     fact*=i;

// }
// console.log(`factorial of ${n} is ${fact}`);


//Q5

// let arr=[2,3,4,7,9];
// let largest =0;

// for(let i =0; i<=arr.length;i++){
//     if(largest<arr[i]){
//         largest = arr[i];
//     }
// }
// console.log(largest);



// Assignment 05

//Q1

// let dicec= Math.floor(Math.random()*6)+1;
// console.log(dicec);



// Assignment 06 

//Q1

// let arr =[3,4,5,6,7,899];
//  let num =5;

//  function getElements(arr,num){
//     for(let i =0; i<arr.length;i++){
//         if(arr[i] > num){
//             console.log(arr[i]);
//         }
//     }
//  }

// getElements(arr,num);












// Assignment 07

// Q1

// const arrayAvg = (arr) =>{
//     let total =0;
//     for(let number of arr){
//         total += number;
//     }
//     return total /arr.length;

// };
// let arr =[2,3,4,5,6];
// console.log(arrayAvg(arr));

// Q2


// let num = 4;
// const isEven = (num) => num % 2 == 0;
// console.log(num);




// Assignment 08

//Q1

// let nums = [1, 2, 3, 4, 5];

// const square = nums.map((num) => num * num);
// console.log(square);

// let sum = square.reduce((acc, cur) => acc + cur, 0);
// let avg = sum / nums.length;
// console.log(avg);


//Q2

// let arr =[1,2,3,4,7];
// console.log(arr.map((num) => num+5));

// let str =['jabir',"imteyaz"];
// console.log(str.map((string)=>string.toUpperCase()));


// Assignment 09

//Q1

// let btn = document.createElement("btn");
// let input= document.createElement("input");
// btn.innerText =" click me ";
// document.querySelector("body").append(btn);
// ducument.querySelector("body").append(input);


