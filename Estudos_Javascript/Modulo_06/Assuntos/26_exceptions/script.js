function saldacao(nome){
    if(typeof nome !== 'string' || !isNaN(nome)){
        throw new Error("Não é uma string");
    } else {
        alert(`Bem vindo ${nome}`);
    }
}

let usuario = prompt("Insira seu nome: ");

saldacao(usuario);