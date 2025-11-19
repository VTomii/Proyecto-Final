
const navChange = () => {
    console.log(window);

    if (window.innerHeight * 0.1 < window.scrollY) {
        document.querySelector("nav").classList.add("fondoNav");
        document.querySelector("#card1").style = "animation:aparecerIzq 3s 1s forwards;";
        document.querySelector("#card2").style = "animation:aparecerDerecha 3s forwards;";
    } else {
        document.querySelector("nav").classList.remove("fondoNav");
    }
};
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

