
let fnt = function checkaccess(role="user" , hastoken=false){
    return role === "admin" || hastoken ? "Access Granted" : "Access Denied" ;
}

console.log(fnt());
console.log(fnt("admin" , true));