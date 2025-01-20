//Crear un array para almacenar los nombres
let listaAmigos = [];

function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let nombreEscrito = document.getElementById("campoNombre").value;
    //Validar la entrada
    if (nombreEscrito === "") {
        alert("Por favor, inserte un nombre.");
    }
    else {
        //Actualizar el array de amigos
        listaAmigos.push(nombreEscrito);
        //Limpiar el campo de entrada
        document.getElementById("campoNombre").value = [];
        //Actualizar lista en pantalla
        actualizarLista();
    }
}

function actualizarLista() {
    //Obtener el elemento de la lista
    let listaHtml = document.getElementById("listaAmigos");
    //Limpiar la lista existente
    listaHtml.innerHTML = "";
    //Iterar sobre el arreglo
    for(let i=0; i<listaAmigos.length; i++) {
        //Agregar elementos a la lista
        listaHtml.innerHTML += `<li> ${listaAmigos[i]} </li>`;
    }
}

function sortearAmigo() {
    //Validar que haya amigos disponibles:
    if(listaAmigos.length === 0) {
        alert("No hay amigos para sortear.");
    }
    else{
        //Limpiar la lista existente
        let listaHtml = document.getElementById("listaAmigos");
        listaHtml.innerHTML = "";
        //Generar un indice aleatorio y obtener el nombre sorteado
        let amigoSorteado = listaAmigos[parseInt(Math.random()*listaAmigos.length)];
        //Mostrar el resultado
        let mostrarSorteo = document.getElementById("resultado");
        mostrarSorteo.innerHTML = "";
        mostrarSorteo.innerHTML = `<h3>El amigo sorteado es: ${amigoSorteado}</h3>`;
    }
}
