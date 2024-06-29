class Conta {
    constructor(saldo){
        this.saldo = saldo;
    }
    deposito(valor){
        this.saldo += valor;
    }
    verificarSaldo(){
        return console.log(this.saldo)
    }
    saque(valor){
        let saldoAnterior = this.saldo;
        if (valor <= this.saldo){
            this.saldo -= valor;
            console.log(`Saque de ${valor} realizado com sucesso, saldo restante de ${this.saldo}`);
        }
        else {
            console.log(`Saldo total de ${this.saldo}, impossivel de retirar ${valor}`);
            this.saldo = saldoAnterior;
        }
    }   
}

let conta = new Conta(1000);
conta.deposito(+1000);
conta.verificarSaldo();
conta.saque(1000);
conta.verificarSaldo();
conta.saque(2500);
conta.verificarSaldo();