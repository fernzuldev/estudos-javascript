class Endereco {
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    alterarRua(value){
        this.rua = value;
    }

    alterarBairro(value){
        this.bairro = value;
    }

    alterarCidade(value){
        this.cidade = value;
    }

    alterarEstado(value){
        this.estado = value;
    }

    getEndereco(){
        console.log(`Você reside na rua ${this.rua} no bairro ${this.bairro} na cidade de ${this.cidade} - ${this.estado}`);
    }
}

let endereco1 = new Endereco("Sete de setembro", "Junco", "Jacobina", "BA");

endereco1.getEndereco();
endereco1.alterarRua("Tamborim");
endereco1.alterarBairro("Cascavel");
endereco1.alterarCidade("Petropolis");
endereco1.alterarEstado("RJ");

endereco1.getEndereco();