

function processData(input){
    if(typeof(input)==="number"){
        return input*input;
    }
    else if(typeof(input)==="string"){
        return input.toUpperCase();
    }
    else{
        return "Invalid Type";
    }
}


console.log(processData(5));
console.log(processData("hello"));
console.log(processData(true));
console.log(processData(NaN));