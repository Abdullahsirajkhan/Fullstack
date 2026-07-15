const info = document.querySelector("#info-card");

if(!info.classList.contains("dark-theme")){
    info.classList.add("dark-theme");
}

let li = document.createElement("li");

li.textContent = "DataBase Connection Timeout";

li.classList.add("urgent-item");

document.querySelector("#alert-list").appendChild(li);


let li_2 = document.createElement("li");

li_2.textContent = "System check completed, all green.";
li_2.style.color = "lightgreen";
li_2.style.fontWeight = 900;
document.querySelector("#alert-list").prepend(li_2);

