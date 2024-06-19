function tamanhoTexto(x){
    return console.log(x.length > 10 ? `Texto muito longo` : `Texto dentro do limite`);
}

tamanhoTexto("Raphael");
tamanhoTexto("Raphaelalvesferreirasilva");
tamanhoTexto("123456789");
tamanhoTexto("1234567");