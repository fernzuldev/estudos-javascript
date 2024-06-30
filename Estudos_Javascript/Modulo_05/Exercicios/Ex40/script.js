class ContaBancaria{
    constructor(contaCorrente, contaPoupanca, jurosPoupanca){
        this.contaCorrente = contaCorrente;
        this.contaPoupanca = contaPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }

    depositarNaCorrente(value) {
        this.contaCorrente += value;
        console.log(`Você depositou ${value} na conta corrente.`);
        this.getDados();
    }

    saqueNaCorrente(value) {
        this.contaCorrente -= value;
        console.log(`Você sacou ${value} da conta corrente.`);
        this.getDados();
    }

    transferirParaPoupanca(value) {
        this.contaCorrente -= value;
        this.contaPoupanca += value;
        console.log(`Você transferiu ${value} para conta poupança.`);
        this.getDados();
    }

    transferirParaCorrente(value) {
        this.contaPoupanca -= value;
        this.contaCorrente += value;
        console.log(`Você transferiu ${value} para conta corrente.`);
        this.getDados();
    }

    aplicarJurosMensal(value){
        this.contaPoupanca += value * (this.jurosPoupanca);
    }

    aplicarJurosAnual(value){
        this.contaPoupanca += 12 * (value * (this.jurosPoupanca));
    }

    getDados(){
        console.log(` Saldo conta corrente: ${this.contaCorrente.toFixed(2)}\n Saldo conta poupança: ${this.contaPoupanca.toFixed(2)}\n juros mensais da poupança: ${this.jurosPoupanca.toFixed(2)}%`);
    }
}

class ContaEspecial extends ContaBancaria{
    constructor(contaCorrente, contaPoupanca, jurosPoupanca){
        super(contaCorrente, contaPoupanca, jurosPoupanca);
        this.jurosEspecial = this.jurosPoupanca * 2;
    }

    getDados(){
        console.log(` Saldo conta corrente: ${this.contaCorrente.toFixed(2)}\n Saldo conta poupança: ${this.contaPoupanca.toFixed(2)}\n juros mensais da poupança: ${this.jurosPoupanca.toFixed(2) * 2}%`);
    }

    aplicarJurosMensal(value){
        this.contaPoupanca += 2 * (value * (this.jurosPoupanca));
    }

    aplicarJurosAnual(value){
        this.contaPoupanca += 2 * (12 * (value * (this.jurosPoupanca)));
    }
}

let contaNormal = new ContaBancaria(1000, 0, 0.05);

contaNormal.getDados();
contaNormal.depositarNaCorrente(500);
contaNormal.saqueNaCorrente(250);
contaNormal.transferirParaPoupanca(300);
contaNormal.aplicarJurosMensal(1);
contaNormal.aplicarJurosMensal(3);
contaNormal.aplicarJurosAnual(2);
contaNormal.transferirParaCorrente(100);

console.log(`======================================`)

let contaBarril = new ContaEspecial(2000, 1000, 0.05);

contaBarril.getDados();
contaBarril.depositarNaCorrente(1000);
contaBarril.saqueNaCorrente(250);
contaBarril.transferirParaPoupanca(300);
contaBarril.aplicarJurosMensal(1);
contaBarril.aplicarJurosMensal(3);
contaBarril.aplicarJurosAnual(2);
contaBarril.transferirParaCorrente(100);