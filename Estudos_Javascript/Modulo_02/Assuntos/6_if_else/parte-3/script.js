let nome = "Raphael";

if(nome != undefined && nome == "Joaquim"){
    alert("Nome esta definido");
} else if (nome == "Raphael" && nome.length > 5){
    alert(`${nome} seu nome tem mais que 5 letras`)
} else {
    alert("Seu nome não é Raphael");
}