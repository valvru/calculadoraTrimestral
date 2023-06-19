const checkbox12 = document.querySelector("#checkbox12");
const checkbox24 = document.querySelector("#checkbox24");
const checkbox36 = document.querySelector("#checkbox36");

const valores12 = document.querySelector(".valores12");
const valores24 = document.querySelector(".valores24");
const valores36 = document.querySelector(".valores36");

const trimestre1 = document.querySelector(".trimestres1");
const trimestre2 = document.querySelector(".trimestres2");
const trimestre3 = document.querySelector(".trimestres3");
const trimestre4 = document.querySelector(".trimestres4");
const trimestre5 = document.querySelector(".trimestres5");
const trimestre6 = document.querySelector(".trimestres6");
const trimestre7 = document.querySelector(".trimestres7");
const trimestre8 = document.querySelector(".trimestres8");
const trimestre9 = document.querySelector(".trimestres9");
const trimestre10 = document.querySelector(".trimestres10");
const trimestre11 = document.querySelector(".trimestres11");
const trimestre12 = document.querySelector(".trimestres12");

const expensas = document.querySelector(".expensas");

const btn = document.querySelector("#calcular");

const result = document.querySelector(".result")


checkbox12.addEventListener("click", input12checked);
checkbox24.addEventListener("click", input24checked);
checkbox36.addEventListener("click", input36checked);

btn.addEventListener("click", calcular)





function input12checked() {
    do {
        valores24.style.display ="none";       
        valores36.style.display ="none";
        break;
    }
    while (checkbox12.checked == true)
}  //Se usa DO WHILE para que al alternar entre input e input aparezca y desaparezcan elementos. Con WHILE desaparecian pero al seleccionar otra opcion no aparecían las que tenian que aparecer

function input24checked() {
    do {  
        valores24.style.display ="block";
        valores36.style.display ="none";
        break;
    }
    while (checkbox24.checked == true)
}

function input36checked() {
    do {  
        valores12.style.display ="block";
        valores24.style.display ="block";
        valores36.style.display ="block";
        break;
    }
    while (checkbox36.checked == true)
}



function calcular() {

    if(checkbox36.checked == true) {
        primerCalculo = parseInt(trimestre1.value)+parseInt(trimestre2.value)+parseInt(trimestre3.value)+parseInt(trimestre4.value)+parseInt(trimestre5.value)+parseInt(trimestre6.value)+parseInt(trimestre7.value)+parseInt(trimestre8.value)+parseInt(trimestre9.value)+parseInt(trimestre10.value)+parseInt(trimestre11.value)+parseInt(trimestre12.value)+parseInt(expensas.value)
    } else if(checkbox24.checked == true) {
        primerCalculo = parseInt(trimestre1.value)+parseInt(trimestre2.value)+parseInt(trimestre3.value)+parseInt       (trimestre4.value)+parseInt(trimestre5.value)+parseInt(trimestre6.value)+parseInt(trimestre7.value)+parseInt(trimestre8.value)+parseInt(expensas.value)
    } else if (checkbox12.checked == true) {
        primerCalculo = parseInt(trimestre1.value)+parseInt(trimestre2.value)+parseInt(trimestre3.value)+parseInt(trimestre4.value)+parseInt(expensas.value)
    };    

    let resultado = parseInt((primerCalculo*3)*0.06);

    result.innerHTML = `El honorario es ${resultado}`
}

document.addEventListener("keyup", function(event) {  //esto hace que al presionar ENTER se ejecute una funcion
    if (event.code === 'Enter') {
        calcular();
    }
});