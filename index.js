// Conseguir un número aleatorio para cambiar el fondo
let numAleatorio = Math.floor(Math.random()*3)+1;



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

function horaActual () {
    let getTime = new Date();
    let hours = getTime.getHours();
    let minutes = getTime.getMinutes();
    let seconds = getTime.getSeconds();
    if (seconds < 10 && minutes < 10) {
        document.getElementById("hora").innerHTML = `${hours}:0${minutes}:0${seconds}`;
    } else if (seconds < 10) {
        document.getElementById("hora").innerHTML = `${hours}:${minutes}:0${seconds}`;
    } else {
        document.getElementById("hora").innerHTML = `${hours}:0${minutes}:${seconds}`;
    }

}

cambioFondo(numAleatorio);
horaActual();
function actualizarHora () {
    setInterval(horaActual,1000)
};
actualizarHora();