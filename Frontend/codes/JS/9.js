
let users = [
    { id: 1, name: "Yahya", email: "yahya@example.com" },
    { id: 2, name: "Saad", email: "saad@example.com" },
    { id: 3, name: "Abdullah", email: "abdullah@example.com" }
];


let maped = users.map(function(user){
    return user.email;
});

console.log(maped);

let accounts = [
    { username: "player1", isBanned: false },
    { username: "troll99", isBanned: true },
    { username: "goku_fan", isBanned: false },
    { username: "spammerX", isBanned: true }
];

let baned = accounts.filter(function(user){
    return user.isBanned;
});

console.log(JSON.stringify(baned,null,2));


let cart = [
    { item: "Mechanical Keyboard", price: 120 },
    { item: "Mousepad", price: 25 },
    { item: "USB-C Cable", price: 15 }
];

let total = cart.reduce(function(accumulate,value){
    return accumulate+value.price;
},0);

console.log(total);


let students = [
    { name: "Ali", score: 45 },
    { name: "Bilal", score: 85 },
    { name: "Zain", score: 92 },
    { name: "Danish", score: 60 }
];


let remain = students.filter(function(item){
    return item.score >= 80;
}).map(function(item){
    return item.name;
});


console.log(remain);

