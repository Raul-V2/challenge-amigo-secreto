// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombre = "";
let arrayAmigo = [];
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
    nombre = document.getElementById('amigo').value;
    if (nombre =='') {
        alert('No a ingresado ningun nombre, intentelo otra vez');
    }else{
        if(arrayAmigo.includes(nombre)){
            alert('ese nombre ya se encuentra en la lista, intentelo otra vez');
        }
        else{
            arrayAmigo.push(nombre);
            lista.innerHTML = arrayAmigo+'</br>';
            console.log(nombre);
            console.log(arrayAmigo.length);
            limpiar();
        }
    }
    
}

function sortearAmigo(){
    let contador = Math.floor(Math.random()*arrayAmigo.length);
    console.log(contador);
    let elegido = arrayAmigo[contador];
    resultado.innerHTML = 'El amigo secreto es:'+ elegido;
    limpiar();
}

function limpiar(){
    nombre = document.getElementById('amigo').value = '';    
}

/*
function listaAmigos(elemento, texto){
    let elementoHtml = document.getElementById(listaAmigos);
    elementoHtml.innerHTML = texto;
    return;
}*/