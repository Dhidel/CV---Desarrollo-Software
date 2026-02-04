// Saludo 

let hora = new Date().getHours();

let temprano = ("Buenos días");
let tarde = ("Buenas tardes");
let noche = ("Buenas noches");
function saludo() {
    let texto; 
    if (hora <= 12){texto = temprano;}
    else if (hora >= 13 && hora <= 18) {texto = tarde;}
    else if (hora >= 19 && hora <= 23){texto = noche;}
    document.getElementById("saludo").textContent = texto;
    }
saludo();


function ShowHide() {
    var container = document.getElementById("tf");

    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function ShowHide1() {
    var container = document.getElementById("end");

    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}

document.addEventListener("keyup", e=>{
    if(e.target.matches("#buscador"))

        if(e.key ==="Escape")e.target.value = ""

    document.querySelectorAll(".subtitulo").forEach(lenguaje=>{

        lenguaje.textContent.toLowerCase().includes(e.target.value.toLowerCase())

        ?lenguaje.classList.remove("filtro")
        :lenguaje.classList.add("filtro") 


    })
})