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
