// Variable de nombre de usuario
const userName = "Jordi";

// Conseguir un número aleatorio para cambiar el fondo
let numAleatorio = Math.floor(Math.random()*3)+1;


// Cambiar el fondo según el numero Aleatorio
function cambioFondo (numAleatorio) {
    let background;
    if (numAleatorio === 1) {
        background = "img/" + numAleatorio + ".png";
    } else {
        background = "img/" + numAleatorio + ".jpg";
    }

    console.log(background);
    document.querySelector(".container").style.backgroundImage = `url(${background})` ;
}

// Mostrar hora en pantalla
function horaActual () {
    let getTime = new Date();
    let hours = getTime.getHours();
    let minutes = getTime.getMinutes();
    // let seconds = getTime.getSeconds();
     if (/*seconds < 10 &&*/ minutes < 10) {
        //seconds = "0"+seconds;
        minutes = "0"+minutes;
    // } else if (seconds < 10) {
    //     seconds = "0" + seconds;
    } else  if (minutes < 10) {
        minutes = "0" + minutes;
    } 
    document.getElementById("hora").innerHTML = `${hours}:${minutes}`; //Borrado :${segundos}
    saludo(hours); // Llamamos a la función que genera el saludo en función de hours
}

// Cambiar el saludo en función de la hora
function saludo (hours) {
    
    if (hours > 5 && hours < 7) {
        document.querySelector(".saludo").textContent = "¿Que haces despierto? " + userName;
    } else if (hours < 12) {
        document.querySelector(".saludo").textContent = "Buenos días " + userName;
    } else if (hours < 21) {
        document.querySelector(".saludo").textContent = "Buenas tardes " + userName;
    } else  if (hours <= 21 || hours > 23 ) {
        document.querySelector(".saludo").textContent = "Buenas noches " + userName;
    } else {
        document.querySelector(".saludo").textContent = "Hora de dormir " + userName;
    }
}

// Se podría refactorizar lo de arriba haciendo una función que retorne el string del saludo y lo añada al document etc.

cambioFondo(numAleatorio);
horaActual();

function actualizarHora () {
    setInterval(horaActual,1000)
};
actualizarHora();
