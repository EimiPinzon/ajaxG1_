

let botonservicio = document.getElementById("boton");
console.log(botonservicio);

botonservicio.addEventListener('click', consumirservicio);

function consumirservicio(){
    alert("Hello everyone ");
}