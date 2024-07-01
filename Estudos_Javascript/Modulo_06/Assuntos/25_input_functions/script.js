function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        alert("Dados invalidos!");
        number = null;
    } else {
        alert(number);
    }
}

let number = prompt("Insira um numero: ");

checarNumero(number);
