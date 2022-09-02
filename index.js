function calculadorImc(){
    let peso = parseFloat (prompt("Ingresa tu peso en Kg")); 
    let altura = parseFloat (prompt("Ingresa tu altura en Mt")); 
    let resultado = alert(peso/(altura*altura)); 
    return (resultado) //devolvemos solo el valor que necesitamos utilizar 
}   

//Recorda que los () indican que estas llamando a la funcion no importa si lo estas guardando o no en una variable

let parametroResultado = calculadorImc() //guardamos en una variable el resultado de la funcion de arriba (como return me trae resultado se guarda ese valor en parametroResultado)


// le indicamos a la funcion que le vamos a pasar un parametro 
function resultado(resultadof1){  //para no confundirnos vamos a ponerle resultadoF1 (f1=funcion1)
    if (resultadof1 < 18.5) { 
        alert("Tu peso está por debajo del promedio saludable");
    } else if ((resultadof1 > 18.5)  && (resultadof1 < 24.9)); {
        alert("Tu peso es saludable");
    } else if ((resultadof1 > 25)  && (resultadof1 < 29.9)); {
        alert("Tienes sobrepeso");
} 

//llamamos ala segunda funcion  y le pasamos el valor de la primera
resultado(parametroResultado)