

function createVault(passcode){
    
    return function guesser(guess , secretMessage){
        return guess===passcode ? secretMessage : "Access Denied";
    };
}

let myVault = createVault(1234);

console.log(myVault(0000, "The gold is hidden under the floorboards.")); 
// Output: "Access Denied"

console.log(myVault("1234", "The gold is hidden under the floorboards.")); 
// Output: "Access Denied"

console.log(myVault(1234, "The gold is hidden under the floorboards.")); 
// Output: "The gold is hidden under the floorboards."