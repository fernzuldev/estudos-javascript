function nomeComIdade (nome, idade) {
    if(idade === undefined || idade === null) {
        console.log(`${nome} seja bem vindo!`);
    } else {
        console.log(`${nome} seja bem vindo! sua idade é ${idade}`);
    }
}

nomeComIdade("Raphael");
nomeComIdade("Raphael", 25);

function soma (a,b){
    if((a === undefined || a === null) || (b === undefined || b === null)){
        console.log("Essa função precisa de dois argumentos")
    } else {
        return console.log(a+b);
    }
}

soma(1);
soma(5,6);