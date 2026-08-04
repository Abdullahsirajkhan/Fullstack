

function log(raw, forbiddenTag){
    let arr = raw.split(",");
    
    let [header , ...payload] = arr;
    
    let san = [];

    for(let item of payload){
        if(item  === "SKIP"){
            continue;
        }
        else if(item === forbiddenTag){
            san.push("REDACTED");
        }
        else{
            san.push(item);
        }
    }

    const finallog = [header , ...san];

    const pos = finallog.indexOf("ERROR");

    return {
        "fortamedLog" : finallog.join("->"),
        "hasError" : finallog.includes("ERROR"),
        "errorposition" : pos
    }


}

const logs = "START,INFO,SKIP,WARN,ERROR,SKIP,CRITICAL";

console.log(log(logs, "WARN"));