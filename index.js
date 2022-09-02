function calculadorImc(){
    let peso = parseFloat (prompt("Ingresa tu peso en Kg")); 
    let altura = parseFloat (prompt("Ingresa tu altura en Mt")); 
    let resultado = alert(peso/(altura*altura)); 
    return (resultado) 
}   



let parametroResultado = calculadorImc() 



function resultado(resultadof1){
    if (resultadof1 < 18.5) { 
        alert("Tu peso está por debajo del promedio saludable");
    } else if ((resultadof1 > 18.5)  && (resultadof1 < 24.9)); {
        alert("Tu peso es saludable"); // hasta acá funciona, carga la página y salen los prompt y alert. Agregué más Else if con más parametros y dejó de funcionar
    } else ((resultadof1 > 25)  && (resultadof1 < 29.9)); {
        alert("Tienes sobrepeso");
    } else if ((resultadof1 > 30)  && (resultadof1 < 99.9)); {
        alert("Tu peso se considera obesidad. recomendamos consultar con un profesional de la salud");
    } else if(resultadof1 > 40);{
        alert("Recomendamos consultar con un profesional de la salud");
    }
}

//a partir de la linea 19 deja de funcionar. Será que más de un ELSE IF no se puede poner?
resultado(parametroResultado)