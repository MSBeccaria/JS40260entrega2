function calculadorImc(){
    let peso = parseFloat (prompt("Ingresa tu peso en Kg"));
    let altura = parseFloat (prompt("Ingresa tu altura en Mt"));
    let resultado = alert(peso/(altura*altura));
    return alert(resultado)
}   

calculadorImc()

setTimeout (resultado,1000);
if (resultado <18.5){
    alert("Estás bajo en peso");
}