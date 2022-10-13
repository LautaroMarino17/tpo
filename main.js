const menu = document.querySelector('.nav');
const icono = document.querySelector('.icono');

console.log(menu);
console.log(icono);

icono.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

const item = document.querySelector('.item');
const form = document.querySelector('.form');

item.addEventListener('click', ()=>{
    form.classList.toggle("spread2")
})

function clicked(marca,cantidad,precio){ 
    alert("Marca:"+" "+marca +"\nCantidad:"+" "+cantidad+"\nPrecio:"+" "+precio)
}


