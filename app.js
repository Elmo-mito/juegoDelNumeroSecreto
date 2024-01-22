let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }

        intentos++;
        limpiarCaja();


    }


    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}


function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);

    /*console.log(numeroGenerado);
    console.log(listaNumerosSorteados);*/

    //Si ya se sortearon todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
         asignarTextoElemento ('p', 'Ya se sorteraon todos los números posibles'); 
    } else {

        //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}



function condicionesIniciales() {
    asignarTextoElemento('h1', '¡Juego del número secreto!');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();

}

function reiniciarJuego() {
    //reiniciar la caja
    limpiarCaja();
    //Indiccar mensaje de intervalo de números
    //Generar número aleatorio de nuevo
    //reiniciar el número de intentos
    condicionesIniciales();
    //Inhabilitar de nuevo botón de nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


condicionesIniciales();