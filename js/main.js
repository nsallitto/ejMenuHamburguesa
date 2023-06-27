const abrir = document.querySelector("#buttonAbrir");
const cerrar = document.querySelector("#buttonCerrar");
const nav = document.querySelector("#nav");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})