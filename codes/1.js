const title = document.querySelector(".side-bar .crayons-card .crayons-subtitle-2");

title.innerHTML = "Raushan Kumar";



const description = document.querySelector(".side-bar .crayons-card p");

description.innerText = "I am a coder and I love to build applications using JavaScript tech stack.";

products.forEach(e=>{
    e.removeChild(e.lastChild);
    arr.push(e.inner);
})