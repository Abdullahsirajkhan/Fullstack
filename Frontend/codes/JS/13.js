
const frameworkSpecs = ["AMOLED Panel", "Next-Gen Processor"];

let des = document.querySelector(".description");


des.innerHTML = '<strong class="highlight-red">Discontinued Model</strong>';

let pc = document.querySelector("#product-card");

 if(pc.getAttribute("data-stock")=="zero"){
    pc.setAttribute("data-stock","available");
    pc.classList.remove("disabled-card");
 }

let spec = document.querySelector("#spec-sheet");


for(let item of frameworkSpecs){

    let li = document.createElement("li");
    li.textContent = item;   
    spec.append(li);  
}

