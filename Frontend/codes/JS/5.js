
let balance = 1000;
let transactioncount = 0;

function process(amount){

    function helper(){
        if(amount<0 && Math.abs(amount-5)<=(balance)){
            balance+=(amount-5);
            transactioncount++;
            console.log("the new balance is : ", balance);
        }
        else if(amount<0 && Math.abs(amount)>(balance+5)){
            console.log("Invalid Amount");
        }
        else if(amount>0){
            balance+=amount;
            transactioncount++;
            console.log("the new balance is : ", balance);
        }
        else{
            console.log("Invalid amount");
        }
    }
    helper(amount);
}

process(-20);
process(20);
process(-991);