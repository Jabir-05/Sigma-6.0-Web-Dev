// let delhi ={
//     latitude : '28.7041 N',
//     longitude: '77.1025 E'
// };

// let student ={
//     name: "Jabir",
//     age: "23",
//     marks :"74"
// };

// let item ={
//     price:100.99,
//     discount: 50,
//     colors:["red","green"]
// };

// const post ={
//     username: "@jabir.imteyaz",
//     content:"This is my #firstPost",
//     likes: 150,
//     reports: 5,
//     tags:["@apnacollege","@delta"]
// };


// let obj ={
//     1:"a",
//     2:"b",
//     true:"c",
//     null:"d",
//     undefined:"e"
// };


// const student ={
//     name: "Jabir",
//     age: "23",
//     marks :"74",
//     city: "delhi"
// };


// objects of objects


// const classInfo={
//     jabir:{
// gade:"A+",
// city:"delhi"
//     },
//     abhishek:{
// grade:"A",
// city:"Bihar"
//     },
//     prasidh:{
//         grade:"A",
//         city:"GN"
//     }
// };


// Array of objects

// const classInfo=[
//     {
//         name:"jabir",
// gade:"A+",
// city:"delhi"
//     },
//     {
//         name:'abhishek',
// grade:"A",
// city:"Bihar"
//     },
//     {
//         name:'prasidh',
//         grade:"A",
//         city:"GN"
//     }
// ];

 let max =prompt("enter the max number");
  

  const rdm =Math.floor(Math.random()*max)+1;
 
  let guess = prompt("guess the number");


  while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;

    }

    if(guess == rdm){
        console.log("you are right, congrats:");
        break;

    }
    else if(guess <rdm){
     guess = prompt("your guess was too small . pease try again");
    }
    else{
        guess = prompt("your guess was too large . pease try again");
    }
    
  }
