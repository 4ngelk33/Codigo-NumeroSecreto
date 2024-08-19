let numeroSecreto= 0;
let intentos= 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarElementos(elemento,texto){
    let elementosHTML=document.querySelector(elemento);
    elementosHTML.innerHTML= texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    if(numeroDeUsuario===numeroSecreto){
       asignarElementos(`p`,`Acertaste el numero secretro en ${intentos} ${(intentos===1)? "vez" : "veces" }`); 
       document.getElementById(`reiniciar`).removeAttribute(`disabled`)
    } else{
        if (numeroDeUsuario>numeroSecreto){
            asignarElementos(`p`,`El numero secreto es menor`); 
        }else {
            asignarElementos(`p`,`El numero secreto es mayor`); 

        }
        intentos++;
        limpiarCaja();
    }

    return;
}
function limpiarCaja(){
    document.querySelector(`#valorUsuario`).value = ``;
 
}
function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length== numeroMaximo){
        asignarElementos(`p`, `Todos los numeros posibles han sido sorteados `)
    }else{
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado)
        return numeroGenerado;
    }
    }
}   
function condicionesIniciales() {
    asignarElementos(`h1`,`Juego del numero secreto`)
    asignarElementos(`p`, `Indique un numero del 1 al ${numeroMaximo}`)
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
} 

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector(`#reiniciar`).setAttribute(`disabled`, `true`);
    

}
condicionesIniciales();

