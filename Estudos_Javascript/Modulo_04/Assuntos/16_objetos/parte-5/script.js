let pessoa = {
    nome : "Raphael"
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome : "Raphael"
}

console.log(pessoa == pessoa2);

pessoa2.nome = "Raphael2";

console.log(pessoa.nome);

pessoa.nome = "Raphael3";

console.log(pessoa2.nome);