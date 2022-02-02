//ARCHIVO JAVASCRIPT PARA EL FUNCIONAMIENTO LÓGICO DE LA CALCULADORA

//Variables
let botones = document.getElementById("buttons");
let panel = document.getElementById("panel-text");
let valorPanel = panel.textContent;
let operacion = "";
let resultado = "";

//Función de cálculo
const calcular = (operacionCalcular) => {

    if(resultado===""){

        resultado = valorPanel;
        operacion = operacionCalcular;
        valorPanel = "0"
        panel.textContent = valorPanel;

    }else{

        num1 = Number(resultado);
        num2 = Number(valorPanel);

        if(operacion==="sum"){
            resultado = num1 + num2;
            valorPanel = "0"
            panel.textContent = valorPanel;
        }
        if(operacion==="subt"){
            resultado = num1 - num2;
            valorPanel = "0"
            panel.textContent = valorPanel;
        }
        if(operacion==="divide"){
            resultado = num1/num2;
            valorPanel = "0"
            panel.textContent = valorPanel;
        }
        if(operacion==="mult"){
            resultado = num1*num2;
            valorPanel = "0"
            panel.textContent = valorPanel;
        }

        operacion = operacionCalcular;

    }

};

//Evento para el click en el panel de botones
botones.addEventListener('click', (e)=>{

    let validarNumb = e.target.classList.contains('numb');
    let validarFunct = e.target.classList.contains('funct');
    let validarOper = e.target.classList.contains('oper');
    let validarEqual = e.target.classList.contains('equal');
    
    if(validarNumb){

        if((valorPanel==="0")&&(e.target.value!=".")){
            valorPanel = e.target.value;
            panel.textContent = valorPanel;
        }else{
            valorPanel += e.target.value;
            panel.textContent = valorPanel;
        }

    }

    if(validarOper){
        
        calcular(e.target.id);

    }

    if(validarEqual){

        calcular(e.target.id);
        valorPanel = String(resultado);
        panel.textContent = valorPanel;
        operacion = "";
        resultado = "";

    }

    if(validarFunct){

        entrada = e.target.id;

        if(entrada==="reset"){

            operacion = "";
            resultado = "";
            valorPanel = "0"
            panel.textContent = valorPanel;

        }

        if(entrada==="del"){

            longitud = valorPanel.length;

            if(longitud===1){
                panel.textContent = "0";
                valorPanel = "0";
            } else {
                valorPanel = valorPanel.slice( 0, longitud - 1 );
                panel.textContent = valorPanel;
            }

        }

    }

});