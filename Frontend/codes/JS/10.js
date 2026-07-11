
let apiResponse = { 
    status: 200, 
    data: { 
        username: "ghost_protocol", 
        level: 99 
    } 
};

let {status, data , role="player"} = apiResponse;

console.log(status,data.username, role);


let defaultSettings = { 
    theme: "light", 
    notifications: true, 
    autoSave: false 
};

let newSettings = {
    ...defaultSettings,
    theme : "dark",
    fontsize : 14
};

console.log(newSettings);

let serverRacks = {
    rackA: 10,
    rackB: 5,
    rackC: 15
};

for([key,value] of Object.entries(serverRacks)){
    if(value<10){
        console.log(`${key} needs maintenance, as the Rack count is ${value}`);
    }
}

let processInfo = { 
    pid: 1024, 
    name: "node.exe", 
    cpu: "2%", 
    ram: "150MB" 
};

function my({name , ram}){
    console.log(`The name of the processis ${name} and the ram usage is ${ram}`)
}

my(processInfo);

