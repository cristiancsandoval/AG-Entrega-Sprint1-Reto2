//ARCHIVO JAVASCRIPT PARA EL CAMBIO DE TEMAS

//Variables
temaActual = localStorage.getItem('tema');

//Elementos HTML
body = document.getElementById('body');
let tb1 = document.getElementById("tb-1");
let tb2 = document.getElementById("tb-2");
let tb3 = document.getElementById("tb-3");

//Función para cambiar tema
const cambiarTema = (tema) =>{

    body.setAttribute("class", tema);
    localStorage.setItem('tema', tema);

    if( tema === "tema1"){
        tb1.setAttribute("class", "")
        tb2.setAttribute("class", "hide")
        tb3.setAttribute("class", "hide")
    }
    if( tema === "tema2"){
        tb2.setAttribute("class", "")
        tb1.setAttribute("class", "hide")
        tb3.setAttribute("class", "hide")
    }
    if( tema === "tema3"){
        tb3.setAttribute("class", "")
        tb2.setAttribute("class", "hide")
        tb1.setAttribute("class", "hide")
    }

}

//Inicialización del tema
const inicializarTema = () =>{
    
    if( temaActual === null){    
        cambiarTema("tema1")
    }
    else{
        cambiarTema(temaActual)
    }
}

document.addEventListener('DOMContentLoaded', inicializarTema());