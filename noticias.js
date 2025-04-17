const noticia1 = document.querySelector(".noticia1"); 
const titulonoticia1 = document.querySelector(".titulonoticia1");
const conteudonoticia1 = document.querySelector(".conteudonoticia1");
const kanye = document.querySelector(".kanye");
const imagemNoticias = document.querySelector(".imagemNoticias");
const iconeFechar = document.querySelector(".iconeFechar");
const section1 = document.querySelector("#section1");
const divKanye = [imagemNoticias, kanye];
const divKanye2 = [kanye, noticia1];
const playboiCarti = document.querySelector(".playboiCarti");
const imagemPlayboi = document.getElementById("imagemPlayboi");
const divPlayboi = [imagemPlayboi, playboiCarti]
const titulonoticia2 = document.getElementById("titulonoticia2");
const conteudonoticia2 = document.getElementById("conteudonoticia2");
const noticia2 = document.getElementById("noticia2");

divKanye.forEach(div =>{
    div.addEventListener("click", function () {
        noticia1.classList.add("noticia1Expansao");
        imagemNoticias.classList.add("noticiaHover1");
        kanye.classList.add("noticiaHover2");

        titulonoticia1.classList.remove("titulonoticia1FadeOut");
        conteudonoticia1.classList.remove("conteudonoticia1FadeOut"); 
        iconeFechar.classList.remove("iconeFecharFadeOut"); 

        if(titulonoticia1.getAttribute("hidden") === null){
            titulonoticia1.removeAttribute("hidden");
            conteudonoticia1.removeAttribute("hidden");
        }
        else{
            setTimeout(function (){
            titulonoticia1.removeAttribute("hidden");
            conteudonoticia1.removeAttribute("hidden");
            iconeFechar.removeAttribute("hidden");
        }, 1*200);
        }
    });
});

iconeFechar.addEventListener("click", function (){
    titulonoticia1.classList.add("titulonoticia1FadeOut");
    conteudonoticia1.classList.add("conteudonoticia1FadeOut"); 
    iconeFechar.classList.add("iconeFecharFadeOut");

    iconeFechar.setAttribute("hidden", "hidden");
    titulonoticia1.setAttribute("hidden", "hidden");
    conteudonoticia1.setAttribute("hidden", "hidden");

    noticia1.classList.remove("noticia1Expansao");
    imagemNoticias.classList.remove("noticiaHover1");
    kanye.classList.remove("noticiaHover2");
});

divPlayboi.forEach(div =>{
    div.addEventListener("click", function () {
        noticia2.classList.add("noticia2Expansao");
        imagemPlayboi.classList.add("noticiaHover3");
        playboiCarti.classList.add("noticiaHover4");

        titulonoticia2.classList.remove("titulonoticia1FadeOut");
        conteudonoticia2.classList.remove("conteudonoticia1FadeOut"); 
        iconeFechar.classList.remove("iconeFecharFadeOut"); 

        if(titulonoticia2.getAttribute("hidden") === null){
            titulonoticia2.removeAttribute("hidden");
            conteudonoticia2.removeAttribute("hidden");
        }
        else{
            setTimeout(function (){
            titulonoticia2.removeAttribute("hidden");
            conteudonoticia2.removeAttribute("hidden");
            iconeFechar.removeAttribute("hidden");
        }, 1*200);
        }
    });
});
