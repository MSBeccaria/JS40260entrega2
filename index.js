function calculadorImc(){
    let peso = parseFloat (prompt("Ingresa tu peso en Kg"));
    let altura = parseFloat (prompt("Ingresa tu altura en Mt"));
    let resultado = alert(peso/(altura*altura));
    return alert(resultado)
}   

calculadorImc()

