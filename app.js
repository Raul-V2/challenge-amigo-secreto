// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombre = "";
let arrayAmigo = [];
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
    nombre = document.getElementById('amigo').value;
    // comprobar si la caja de texto esta vacia
    if (nombre =='') {
        alert('Por favor, ingrese un nombre válido');
    // comprueba si registra dos veces un nombre
    }else{
        if(arrayAmigo.includes(nombre)){
            alert('Ese nombre ya se encuentra en la lista, intentelo otra vez');
            limpiar('#amigo');
        }
        //agrega nombres a la lista
        else{
            arrayAmigo.push(nombre);
            let nuevoAmigo = document.createElement('li');
            nuevoAmigo.textContent = nombre;
            // Agregar el <li> al elemento <ul>
            lista.appendChild(nuevoAmigo); 
            // limpia la caja de texto y el resultado del sorteo
            limpiar('#amigo');
            resultado.innerHTML='';
        }
    }    
}

function sortearAmigo(){
    // genera un numnero random para elegir al amigo secreto
    let contador = Math.floor(Math.random()*arrayAmigo.length);
    //asigna el nombre
    let elegido = arrayAmigo[contador];
    resultado.innerHTML = 'El amigo secreto sortado es:'+ elegido;
    //limpia la lista y el array para poder agregar nuevos nombres
    lista.innerHTML='';
    arrayAmigo = [];
}

function limpiar(id){
    let valorCaja = document.querySelector(id).value = '';     
}

