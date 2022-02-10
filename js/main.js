import {cajaParaLasPalabras} from "./local.js";




onload = function(){
    iniciarJuego();
};

function iniciarJuego(){
  console.log('%c Iniciando Juego! ', 'background: #222; color: #bada55');
  let div = document.createElement("div");
    let boxes = document.querySelector(".boxes");
    div.id = "startDiv";
    div.style.width = "100%";
    div.style.height = "120%";
    div.style.marginTop = "0";
    div.style.backgroundColor = "black";
    div.style.position = "absolute";
    div.style.zIndex = "99";
    const body = document.querySelector("body");
    //añadirlo como hijo
    boxes.prepend(div);
    div.append(cajaParaLasPalabras(div));
   
}

