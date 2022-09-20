const products = document.querySelectorAll(".as-imagegrid-item-title");

const a = [];

products.forEach(e=>{
    e.removeChild(e.lastChild);
    a.push(e.innerHTML);
});
// ['iPhone ', 'Mac ', 'iPad ', 'Watch ', 'AirPods ', 'Music ', 'TV ']



