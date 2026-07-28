
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


const classData = [
  { name: "Ali", score: 40 },
  { name: "Sara", score: 85 },
  { name: "Zayn", score: 30 },
  { name: "Hira", score: 60 }
];

function cat(students){
    let results = [];

    for(let student of students){
        if(student.score>=50){
            results.push(student.name);
        } 
        else{
            results.unshift(student.name);
        }
    }
    return results;    
}

console.log(cat(classData));


function sep(orders){
    let Porders = [];
    let Sorders = [];

    for(let order of orders){
        if(order.amount>100){
            Porders.push(order.id);
        }
        else{
            Sorders.push(order.id);
        }
    }
    let struct = {
        "priority" : Porders ,
        "standard" : Sorders
    };
    return struct;
}

const orderlist = [
  { id: 101, amount: 150 },
  { id: 102, amount: 45 },
  { id: 103, amount: 200 },
  { id: 104, amount: 100 }
];



console.log(sep(orderlist));

function filter(scores, num){
    let passed = [];

    for(let key in scores){
        if(scores[key]>=num && scores[key]>=90){
            passed.unshift(key);
        }
        if(scores[key]>=num && scores[key]<90){
            passed.push(key);
        }
    }

    return passed;
}

const classScores = {
  Ali: 75,
  Sara: 95,
  Zayn: 40,
  Hira: 92,
  Bilal: 80
};

console.log(filter(classScores,70));


function processcart(carts, inventory){

    let log = [];

    for (let cart of carts){
        if(Object.hasOwn(inventory,cart.name) && inventory[cart.name]>=cart.requestedQty){
            inventory[cart.name]-=cart.requestedQty;
            log.push({"item": cart.name , "status" : "FULFILLED" , "qty" : cart.requestedQty});
        }
        else{
            log.unshift({"item": cart.name , "status" : "REJECTED" , "qty" : 0});            
        }
    }
    return {"log" : log , "newinvent" : inventory};
}

const storeStock = {
  Laptop: 4,
  Mouse: 10,
  Keyboard: 0
};

const userCart = [
  { name: "Laptop", requestedQty: 2 },
  { name: "Keyboard", requestedQty: 1 },
  { name: "Mouse", requestedQty: 3 }
];

console.log(processcart(userCart, storeStock));


