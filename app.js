// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let nombreEscrito = "";
let listaHtml = "";

function agregarAmigo() {
    nombreEscrito = document.getElementById("campoNombre").value;
    if (nombreEscrito === "") {
        alert("Por favor, inserte un nombre.");
    }
    else {
        listaAmigos.push(nombreEscrito);
        document.getElementById("campoNombre").value = [];
        actualizarLista();
    }
}

function actualizarLista() {
    listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML = "";
    for(let i=0; i<listaAmigos.length; i++) {
        listaHtml.innerHTML += `<li> ${listaAmigos[i]} </li>`;
    }
}

