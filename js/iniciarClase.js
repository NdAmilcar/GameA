import {Ahorcado} from "./clasePersonaje.js";
import {mostrarLocalStorage} from "./local.js";

let mostrar = mostrarLocalStorage;


let ahorcado = new Ahorcado(mostrar("palabras"));
export function iniciar() {
        let palabra = ahorcado.palabra;
        let palabraRandom = palabra[Math.floor(Math.random() * palabra.length)];
        let pista = palabraRandom.pista;
        palabraRandom = palabraRandom.palabra;
        let espacioGuardado = new Array(palabraRandom.length);
    ahorcado.dibujar();
    document.getElementById("letra").focus();
    let botonEnviar = document.getElementById("boton");
    botonEnviar.addEventListener("click", function () {
        let cajaParaLasPalabras = document.querySelector(".cajaParaLasPalabras");
        cajaParaLasPalabras.style.display = "none";
        let letra = document.getElementById('letra').value;
        ahorcado.mostrarPista(pista);
        ahorcado.filtrarLetra(letra, espacioGuardado, palabraRandom, pista);
    });

}


