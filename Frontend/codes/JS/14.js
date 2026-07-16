const serverState = {
  adminUser: "Abdullah",
  isDevMode: true,
  statusCode: 500,
  errors: ["Memory leakage detected in stack component", "Unauthorized root access attempt"]
};


let user = document.querySelector(".user-display");
let msj = document.querySelector(".sys-message");
let panel = document.querySelector("#core-panel");
let error = document.querySelector("#log-container");
let env = document.querySelector("#env-banner");

user.textContent = serverState.adminUser;

if(serverState.isDevMode){
    user.innerHTML = `<label class="badge-dev">${serverState.adminUser}[DEV]</label>`;
}

if(serverState.statusCode===500){
    msj.textContent = "CRITICAL SERVER CRASH ";
    msj.classList.add("text-status-error");

    panel.classList.add("alert-mode");
    panel.setAttribute("data-env","critical");
}

for(let item of serverState.errors){

    let li = document.createElement("li");
    li.textContent = item;
    error.append(li);
}

if(serverState.isDevMode){
    env.classList.add("banner-style");
    env.textContent = "DEVELOPMENT ENVIRONMENT INTERFACE ACTIVE";
    env.hidden = false;
}