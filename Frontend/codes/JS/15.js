
function updateInventory(arr){
    if(!arr.length){
        arr.push("Default Item");
    }
    else{
        arr.pop();
        arr.unshift("Special Item");
    }
    return arr;    
}

let myarr = ["tool" , "mango"];

console.log(updateInventory(myarr));


function managequeue(queue){
    if(queue.length==0){
        queue.push("First in the line");
    }
    else{
        queue.unshift(queue.pop());
    }

    return queue;
}

console.log(managequeue(myarr));
