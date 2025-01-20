// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let nombreEscrito = "";

function agregarAmigo() {
    nombreEscrito = document.getElementById("campoNombre").value;
    if (nombreEscrito === "") {
        alert("Por favor, inserte un nombre.");
    }
    else {
        listaAmigos.push(nombreEscrito);
        document.getElementById("campoNombre").value = [];
    }
    console.log(listaAmigos);
}