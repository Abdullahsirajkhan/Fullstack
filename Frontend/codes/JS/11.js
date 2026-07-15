
let title = document.querySelector("#main-title");
title.textContent="changed!";

console.log(title.textContent);

let status = document.querySelector(".status-text");

status.innerHTML = '<strong style="color: green;">Verified!</strong>';

let link = document.querySelector("#user-link");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://google.com");

link.removeAttribute("href");

link.setAttribute("href" , "https://github.com");

console.log(link.getAttribute("href"));

let badge = document.querySelector("#badge");

const lev = badge.getAttribute("data-level");

if(lev=="guest"){
    badge.setAttribute("data-level","admin");
    badge.hidden = false;
}
