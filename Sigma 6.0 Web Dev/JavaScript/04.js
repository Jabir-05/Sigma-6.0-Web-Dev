let todo =[];

let req = prompt("please enter your request");


while(true){
    if(req == "quite"){
        console.log("quiting app");
        break;
    }

    if(req == "list"){
        console.log("----------");
        for(let i =0; i<todo.length; i++){
            console.log(i,todo[i]);

        }
        console.log("----------");
    }
    else if(req == "add"){
        let task = prompt("please enter your task:");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let ind =prompt("enter task index:");
        todo.splice(ind,1);
        console.log("task delete");
    }
    else {
        console.log("wrong requset");
    }
   req = prompt("please enter your request:");
}


