const noticia1 = document.querySelector("#noticia1"); 
const titulonoticia1 = document.querySelector("#titulonoticia1");
const conteudonoticia1 = document.querySelector("#conteudonoticia1");
const kanye = document.querySelector("#kanye");
const imagemKanye = document.querySelector("#imagemKanye");
const iconeMusica = document.querySelector("#iconeMusica");

noticia1.addEventListener("click", function () {
    titulonoticia1.toggleAttribute("hidden");
    conteudonoticia1.toggleAttribute("hidden");
    imagemKanye.classList.toggle("noticiaHover1");
    kanye.classList.toggle("noticiaHover2");
    noticia1.classList.toggle("noticia1Expansao");
    iconeMusica.toggleAttribute("hidden");
});

imagemKanye.addEventListener("click", function () {
    titulonoticia1.toggleAttribute("hidden");
    conteudonoticia1.toggleAttribute("hidden");
    imagemKanye.classList.toggle("noticiaHover1");
    kanye.classList.toggle("noticiaHover2");
    noticia1.classList.toggle("noticia1Expansao");
    iconeMusica.toggleAttribute("hidden");
});