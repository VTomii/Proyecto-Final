let menu= document.querySelector('.menu');
let flag=false;
let contador=0;

const navChange=()=>{
    
    if(window.innerHeight*0.1 < window.scrollY  ){
        document.querySelector("nav").classList.add("fondoNav")
        
    }else{
    document.querySelector("nav").classList.remove("fondoNav")
        
    
    }
} 
function iniciar(){
    var imagenes=document.querySelectorAll('.imagenes');
    soltar=document.getElementById('cajasoltar');  
    soltar2  =document.getElementById('cajasoltar2'); 
    soltar3 = document.getElementById('cajasoltar3'); 

    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        
    }

    soltar.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){
    e.preventDefault(); }, false)
    
    ;
    soltar.addEventListener('drop', soltado, false);


    soltar2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);


    soltar3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado, false);

}
function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e){
    e.preventDefault();
    console.log(e)
    let id=e.dataTransfer.getData('Text');
    
    let imagen=document.getElementById(id);
    console.log(imagen)
    imagen.style.display= 'none';
    let contenedor;
    if(e.target.tagName ==="P"){
        contenedor=e.target.parentNode;
    }else{
        contenedor= e.target;
    }
    contenedor.innerHTML='<img src="'+imagen.src+'" height="100%" width="100%">';
    contador++
    

    if(contador == 3){
    let imagen1 = document.querySelector("#cajasoltar>img").src.toLowerCase().includes("rompe1.png");
    let imagen2 = document.querySelector("#cajasoltar2>img").src.toLowerCase().includes("rompe2.png");
    let imagen3 = document.querySelector("#cajasoltar3>img").src.toLowerCase().includes("rompe3.png");

    const cajas = document.querySelector(".cajas");
    cajas.style.gap = "0px";
    const cajitas = document.querySelectorAll(".caja");

    cajas.style.transform = "scale(1.5)";
    for(let caja of cajitas){
        caja.style.border = "0";
    }

    const titulo = document.querySelector(".espacio-titulo");

    if(imagen1 && imagen2 && imagen3){
        setTimeout(() => {
            cajas.style.transform = "scale(1)";
            cajas.style.gap = "0";
        }, 3000);

        setTimeout(() => {
            titulo.innerHTML = `Felicitaciones!!<br>Puzzle correctamente resuelto`;
            titulo.classList.add("exito");  
            cajas.style.opacity = "0";
            cajas.style.gap = "0";
        }, 6000);
    } else {
        setTimeout(() => {
        titulo.innerHTML = `Lo sentimos, Puzzle no resuelto.<br/>Prueba otra vez <img width="50px" src="Documento-Proyecto/assets/imagenes/iconodejuego.png"/>`;
        titulo.classList.add("fallo"); 
        cajas.style.opacity = "0.7";
    }, 500);

    }
}
        else{
            for(let caja of cajitas){
                caja.style.border=0;
                caja.classList.remove("cajaHover")
                
            }
            setTimeout(()=>{
                for(let caja of cajitas){
                    caja.style.opacity="0.7";
            }
            },5000)
        }
    }

function reinicio() {
    window.location.reload();
}
function desplegar() {
    const menuTema = document.getElementById("menuTema");
    menuTema.classList.toggle("tema-block");
}

function temaDia() {
    document.body.classList.remove("body-night");
    document.body.classList.add("body-day");
    localStorage.setItem("tema", "dia");
}

function temaNoche() {
    document.body.classList.remove("body-day");
    document.body.classList.add("body-night");
    localStorage.setItem("tema", "noche");
}

window.addEventListener("load", () => {
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado === "noche") {
        temaNoche();
    } else {
        temaDia();
    }
});
iniciar()
