// Variable de nombre de usuario
const userName = "Jordi";

// Conseguir un número aleatorio para cambiar el fondo
let numAleatorio = Math.floor(Math.random()*3)+1;


// Cambiar el fondo según el numero Aleatorio
function cambioFondo (numAleatorio) {
    let background;
    switch (numAleatorio) {
        case (1):
            background = "img/1.png";
        break;
        case (2):
            background = "img/2.jpg";
        break;
        case (3):
            background = "img/3.jpg"
        break;
    }
    console.log(background);
    document.querySelector(".container").style.backgroundImage = `url(${background})` ;
}

// Mostrar hora en pantalla
function horaActual () {
    let getTime = new Date();
    let hours = getTime.getHours();
    let minutes = getTime.getMinutes();
    let seconds = getTime.getSeconds();
    if (seconds < 10 && minutes < 10) {
        seconds = "0"+seconds;
        minutes = "0"+minutes;
    } else if (seconds < 10) {
        seconds = "0" + seconds;
    } else  if (minutes < 10) {
        minutes = "0" + minutes;
    } 
    document.getElementById("hora").innerHTML = `${hours}:${minutes}:${seconds}`;
    saludo(hours); // Llamamos a la función que genera el saludo en función de hours
}

// Cambiar el saludo en función de la hora
function saludo (hours) {
    if (hours < 12) {
        document.querySelector(".saludo").textContent = "Buenos días " + userName;
    } else if (hours < 21) {
        document.querySelector(".saludo").textContent = "Buenas tardes " + userName;
    } else {
        document.querySelector(".saludo").textContent = "Buenas noches " + userName;
    }
}


cambioFondo(numAleatorio);
horaActual();

function actualizarHora () {
    setInterval(horaActual,1000)
};
actualizarHora();
