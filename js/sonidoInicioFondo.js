export function sonidoInicioFondo(){
    let audio = document.getElementById('fondo');
    audio.src = './sonidos/fondo2.mp3';
    audio.loop = true;
    //MUTER Y LUEGO PLAY
    audio.muted = true;
    audio.play().then(function() {
        audio.muted = false;
    }).catch(function(error) {
        console.log(error);
    });   
}
