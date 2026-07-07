
var x=10;

function my_function(){
    console.log(this.x);
    let x = 20;
    console.log(x);
}

my_function();