import {iniciar} from "./iniciarClase.js";
import { botonReglas } from "./reglas.js";

export function guardarLocalStorage(palabra,palabraNueva,pista){
    let palabras = {
        palabra: palabraNueva,
        pista: pista
    }
    let palabrasGuardadas = JSON.parse(localStorage.getItem(palabra));
    if(palabrasGuardadas == null){
        palabrasGuardadas = [];
    }
    palabrasGuardadas.push(palabras);
    localStorage.setItem(palabra, JSON.stringify(palabrasGuardadas));
}


export function mostrarLocalStorage(palabra){
    let palabrasGuardadas = JSON.parse(localStorage.getItem(palabra));
    return palabrasGuardadas;
}


export function cajaParaLasPalabras(div){
    botonReglas()

    let cajaParaLasPalabras = document.querySelector(".cajaParaLasPalabras");
    cajaParaLasPalabras.style.display = "block";
    cajaParaLasPalabras.style.width = "20%";
    cajaParaLasPalabras.style.height = "20%";
    cajaParaLasPalabras.style.backgroundColor = "black";
    cajaParaLasPalabras.style.color = "white";
    cajaParaLasPalabras.style.position = "absolute";
    cajaParaLasPalabras.style.zIndex = "99";
    cajaParaLasPalabras.style.top = "30%";
    cajaParaLasPalabras.style.left = "35%";
    let botonParaGuardar = document.createElement("button");
    botonParaGuardar.innerHTML = "INICIAR";
    botonParaGuardar.style.height = "50px";
    botonParaGuardar.style.marginTop = "30px";
    botonParaGuardar.style.backgroundColor = "green";
    botonParaGuardar.style.color = "white";
    botonParaGuardar.style.fontSize = "20px";
    botonParaGuardar.style.fontFamily = "Arial";
    cajaParaLasPalabras.append(botonParaGuardar);
    botonParaGuardar.addEventListener("click", function(){
        let palabra = document.querySelector("#miPalabra").value;
        if(palabra == ""){
            alert("No puedes dejar la palabra vacia");
            return;
        }
        //CONVERTIR LA PALABRA A MAYUSCULAS
        palabra = palabra.toUpperCase();
        //SACARLE LOS ESPACIOS A PALABRA
        palabra = palabra.replace(/\s/g, "");
        let pista = document.querySelector("#miPista").value;
        guardarLocalStorage("palabras", palabra, pista);
        //HACER RELOAD
        cajaParaLasPalabras.style.display = "none";
        div.style.display = "none";
        setTimeout(function(){
        iniciar();
        console.log('%c Good Game! ', 'background: #232; color: #bada55');
        }, 1000);
    });

 }