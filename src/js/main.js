import '../css/style.css'
import inicialize from './js-turtle.js'

let imagecanvas = document.getElementById("imagecanvas");
let turtlecanvas = document.getElementById("turtlecanvas");
let actionButton = document.getElementById("actionButton");

actionButton.addEventListener("click", displayFlower);
inicialize(1024, 1024);
function displayFlower() {
    actionButton.disabled = true;
    actionButton.innerText = "Una flor para otra flor"
    clear();
    draw();
    //showGrid(24); 

    setSpeed(10);
    setJumpSteps(0)
    hideTurtle();

    width(10);
    pendown();



    let TAMANO_PETALO = 300
    let ESPACIO_ENTRE_PETALO_INTERNO = 7
    let ESPACIO_ENTRE_PETALOS_LATERAL = 90//40
    let CANTIDAD_PETALOS = 18
    let CANTIDAD_HOJAS_INTERNAS = 40

    let RADIO_FLOR = ESPACIO_ENTRE_PETALOS_LATERAL
    goto(RADIO_FLOR, 0)

    for (let i = 0; i < CANTIDAD_PETALOS; i++) {
        for (let j = 0; j < CANTIDAD_HOJAS_INTERNAS; j++) {
            if(j == 0 || j == 2){color(255, 0, 0)}else{color(255, 255, 0);}
            right(90)
            circle(TAMANO_PETALO - j * ESPACIO_ENTRE_PETALO_INTERNO, 90)
            left(90)
            circle(TAMANO_PETALO - j * ESPACIO_ENTRE_PETALO_INTERNO, 90)
            right(180)
        }
        circle(ESPACIO_ENTRE_PETALOS_LATERAL, 20)
    }

    //centro
    color(255, 165, 0) //naranja
    width(10);
    let resta = 2
    let radius = RADIO_FLOR
    for (let i = 0; i < RADIO_FLOR; i += resta) {
        penup()
        left(90)
        forward(resta)
        right(90)
        pendown()
        radius -= resta
        circle(radius)
    }

    //contorno centro
    goto(RADIO_FLOR, 0)
    color(0, 0, 0)
    width(4);
    circle(RADIO_FLOR)
}
