let pessoa = {
    "name": "Raphael",
    "age": 25,
    "position": "Dev",
    "technologies": ["HTML", "CSS", "JS", "GIT"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJson = JSON.parse(pessoaTexto);

console.log(pessoaJson);

console.log(pessoaJson.technologies[0]);