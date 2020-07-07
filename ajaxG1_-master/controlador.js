

let botonservicio = document.getElementById("boton");
console.log(botonservicio);

botonservicio.addEventListener('click', consumirservicio);

function consumirservicio(){
    
}

let botonServicio = document.getElementById("boton");

botonServicio.addEventListener('click',consumirServicio);


//Objeto de ajaax
let conexionAJAX = new XMLHttpRequest();

let parra1=document.getElementById("parra1");
let parra2=document.getElementById("parra2");
let parra3=document.getElementById("parra3");
let parra4=document.getElementById("parra4");
let parra5=document.getElementById("parra5");
let parra6=document.getElementById("parra6");


function consumirServicio(){

    let url = 'https://jsonplaceholder.typicode.com/todos';
    conexionAJAX.open('GET', url, true);

    conexionAJAX.onload = function() {
        let respuesta = JSON.parse(this.responseText);
        console.log(respuesta[50]);
        console.log(respuesta[50].title);

        let cambiartitulo=document.getElementById("parra1");
        cambiartitulo.textContent=respuesta[50].title;
    }
   
    conexionAJAX.send();

}

