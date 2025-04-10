const noticia1 = document.querySelector("#noticia1"); 
const titulonoticia1 = document.querySelector("#titulonoticia1");
const conteudonoticia1 = document.querySelector("#conteudonoticia1");
const kanye = document.querySelector("#kanye");
const imagemKanye = document.querySelector("#imagemKanye");

noticia1.addEventListener("click", function () {
    titulonoticia1.toggleAttribute("hidden");
    conteudonoticia1.toggleAttribute("hidden");
    imagemKanye.classList.toggle("noticiaHover1");
    kanye.classList.toggle("noticiaHover2");
});

imagemKanye.addEventListener("click", function () {
    titulonoticia1.toggleAttribute("hidden");
    conteudonoticia1.toggleAttribute("hidden");
    imagemKanye.classList.toggle("noticiaHover1");
    kanye.classList.toggle("noticiaHover2");
});