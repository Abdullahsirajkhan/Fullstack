

function createCounter(){
    let count=0;

    return function inner(){
        console.log("before increment ",count)
        count++;
        console.log("After increament",count);
    }
}

const mycounter= createCounter();

mycounter();
mycounter();
mycounter();
mycounter();
mycounter();
mycounter();