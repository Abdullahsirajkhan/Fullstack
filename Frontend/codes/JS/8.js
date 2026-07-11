
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13];



array[3]=99;

for(let items of array){
    console.log(items)
}

let info= [
    3,
    {
        name : "Abdullah",
        id : 31684
    },
    "mjhe tum nazr se gira to rhe ho "
];

for(let items of info){
    console.log(items)
}


let arr = [ ];

arr.push("Alice");
arr.push("Bob");
arr.push("Charlie");

for(let items of arr){
    console.log(items)
}


arr.unshift("David");

for(let items of arr){
    console.log(items)
}

let inventory = ["Sword", "Shield", "Potion", "Bow", "Arrow"];

inventory.splice(1,2,"Magic Wand" , "helmet");

for(let items of inventory){
    console.log(items)
}

let found = inventory.find(function(item){
    if(item == "helmet")
        return true;
});
