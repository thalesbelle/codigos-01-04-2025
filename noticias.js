const noticia1 = document.querySelector("#noticia1"); 
const titulonoticia1 = document.querySelector("#titulonoticia1");
const conteudonoticia1 = document.querySelector("#conteudonoticia1");
const kanye = document.querySelector("#kanye");
const imagemKanye = document.querySelector("#imagemKanye");
const iconeFechar = document.querySelector("#iconeFechar");
const section1 = document.querySelector("#section1");
const divKanye = [imagemKanye, kanye];
const divKanye2 = [kanye, noticia1];

divKanye.forEach(div =>{
    div.addEventListener("click", function () {
        noticia1.classList.add("noticia1Expansao");
        imagemKanye.classList.add("noticiaHover1");
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
        }, 1*100);
        }
    });
});

iconeFechar.addEventListener("click", function (){
    titulonoticia1.classList.add("titulonoticia1FadeOut");
    conteudonoticia1.classList.add("conteudonoticia1FadeOut"); 
    iconeFechar.classList.add("iconeFecharFadeOut");

    noticia1.classList.remove("noticia1Expansao");
    imagemKanye.classList.remove("noticiaHover1");
    kanye.classList.remove("noticiaHover2");
    
    iconeFechar.setAttribute("hidden", "hidden");
    titulonoticia1.setAttribute("hidden", "hidden");
    conteudonoticia1.setAttribute("hidden", "hidden");
});

kanye.addEventListener("mouseover", function (){
    imagemKanye.style.transition = "all 0.4s ease-in-out";
    imagemKanye.style.width = "320px";
    imagemKanye.style.height = "420px";
    kanye.style.fontSize = "85px";
});

kanye.addEventListener("mouseout", function (){
    imagemKanye.style.transition = "all 0.4s ease-in-out"
    imagemKanye.style.width = "300px"
    imagemKanye.style.height = "400px"
    kanye.style.fontSize = "80px";
});