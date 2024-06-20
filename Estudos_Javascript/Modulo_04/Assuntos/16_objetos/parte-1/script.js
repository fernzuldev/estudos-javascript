let cachorro = {
    nome : "Raphael",
    sexo : "Macho",
    idade : 25,
    raca : "Tecnico de ti",
    latir : function(){
        console.log(`${this.nome} latiu: Au au`);
    }
};

console.log(cachorro);
console.log(cachorro.nome);
console.log(cachorro.sexo);
console.log(cachorro.idade);
console.log(cachorro.raca);

cachorro.latir();