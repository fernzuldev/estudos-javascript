let calculadora = {
    somar: function (x,y){
        console.log(`A soma deu: ${x + y}`);
    },
    subtrair: function (x,y){
        console.log(`A subtração deu ${x - y}`);
    },
    multiplicar: function(x,y){
        console.log(`A multiplicação deu ${x * y}`);
    },
    dividir: function(x,y){
        if(x >= y){
            console.log(`A divisão deu ${x/y}`);
        } else {
            console.log(`A divisão deu ${y/x}`);
        }
    }
};

calculadora.somar(10,8);
calculadora.subtrair(10,8);
calculadora.multiplicar(10,8);
calculadora.dividir(10,2);
calculadora.dividir(2,10);