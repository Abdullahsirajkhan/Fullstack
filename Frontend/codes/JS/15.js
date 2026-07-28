
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

    for(student of students){
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