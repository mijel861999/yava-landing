var primerArchivo = document.getElementById('primer-archivo');
var segundoArchivo = document.getElementById('segundo-archivo');
var tercerArchivo = document.getElementById('tercer-archivo');
var cuartoArchivo = document.getElementById('cuarto-archivo');


var primerArchivoContenido = document.getElementById('primer-archivo-contenido');
var segundoArchivoContenido = document.getElementById('segundo-archivo-contenido');
var tercerArchivoContenido = document.getElementById('tercer-archivo-contenido');
var cuartoArchivoContenido = document.getElementById('cuarto-archivo-contenido');


const mostrarArchivo1 = () =>{
    primerArchivo.classList.add('abierto');
    segundoArchivo.classList.remove('abierto');
    tercerArchivo.classList.remove('abierto');
    cuartoArchivo.classList.remove('abierto');

    primerArchivoContenido.style.display = "block";
    segundoArchivoContenido.style.display = "none";
    tercerArchivoContenido.style.display = "none";
    cuartoArchivoContenido.style.display = "none";
    return false
} 

const mostrarArchivo2 = () =>{
    segundoArchivo.classList.add('abierto');
    primerArchivo.classList.remove('abierto');
    tercerArchivo.classList.remove('abierto');
    cuartoArchivo.classList.remove('abierto');

    segundoArchivoContenido.style.display = "block";
    primerArchivoContenido.style.display = "none";
    tercerArchivoContenido.style.display = "none";
    cuartoArchivoContenido.style.display = "none";
    return false
}

const mostrarArchivo3 = () =>{
    tercerArchivo.classList.add('abierto');
    segundoArchivo.classList.remove('abierto');
    primerArchivo.classList.remove('abierto');
    cuartoArchivo.classList.remove('abierto');

    tercerArchivoContenido.style.display = "block";
    segundoArchivoContenido.style.display = "none";
    primerArchivoContenido.style.display = "none";
    cuartoArchivoContenido.style.display = "none";
    return false
} 

const mostrarArchivo4 = () =>{
    cuartoArchivo.classList.add('abierto');
    segundoArchivo.classList.remove('abierto');
    primerArchivo.classList.remove('abierto');
    tercerArchivo.classList.remove('abierto');

    cuartoArchivoContenido.style.display = "block";
    segundoArchivoContenido.style.display = "none";
    tercerArchivoContenido.style.display = "none";
    primerArchivoContenido.style.display = "none";
    return false
} 