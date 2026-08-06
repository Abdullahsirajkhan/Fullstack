
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


function sync(rawlist , backup , target){

    let raw  = rawlist.split("|");

    for(let i = 0; i<raw.length; i++){
        if(raw[i] === "CORRUPT"){
            raw.splice(i,1);
        }
    }

    let [featured , ...regular] = [...raw];

    let activequeue = [...regular , ...backup];

    for(let i = 0 ; i<activequeue.length; i++ ){
        if(activequeue[i] === "SKIP"){
            activequeue.splice(i,1);
        }
    }

    let full = [featured, ...activequeue];  


    return {
        "Final-string" : full.join("->"),
        "Target-found? " : full.includes(target),
        "Target-Index" : full.indexOf(target)
    }


}

const raw = "TRK1|CORRUPT|TRK2|SKIP|TRK3";
const backup = ["TRK4", "TRK5"];

console.log(sync(raw, backup, "TRK3"));


function process(raw, prioritylist , search){

    let arr = raw.split(",");


    let [batchhead,...transactions] = [...arr];
    let validtx = [];


    for(let item of transactions){
        if(item === "SKIP"){
            continue;
        }
        else if(item === "BAD_DATA"){
            validtx.push("RECOVERED");
        }
        else{
            validtx.push(item);
        }
    }


        let final = [...prioritylist , ...validtx]

        let trimmed = final.slice(0,5);

        let index =  final.indexOf(search);

        return {
            "batch" : batchhead , 
            "formattedQueue" : final.join(" | "),
            "found" : final.includes(search),
            "index" : index
        }
    }


const batchData = "HEAD_01,TX1,SKIP,BAD_DATA,TX2,TX3,TX4";
const priority = ["P1"];

console.log(process(batchData, priority, "TX2"));