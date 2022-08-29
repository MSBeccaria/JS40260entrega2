function calculadorImc(){
    let peso = parseFloat (prompt("Ingresa tu peso en Kg"));
    let altura = parseFloat (prompt("Ingresa tu altura en Mt"));
    let resultado = alert(peso/(altura*altura));
    return alert(resultado)
}   

calculadorImc()

function resultado(){
    if (resultado < 18.5){
        alert("Tu peso estápor debajo del promedio saludable");
    } else if (resultado > 18.5)
        && (resultado > 24.9);{
        alert("Tu peso es saludable");
    }
}


/*switch(resultado){
    case "<18.5":
      return alert("Tu peso estápor debajo del promedio saludable" );
      break;

      case "<18,5 && >24,9":
        return alert("Tu peso es saludable");
         break;
    