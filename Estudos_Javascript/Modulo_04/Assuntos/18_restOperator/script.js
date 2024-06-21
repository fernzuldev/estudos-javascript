let num0 = 0;
let num1 = 1;
let num2 = 2;
let num3 = 3;

function imprimirNums(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNums(num0, num3, num2);
imprimirNums(num2, num1);
imprimirNums(8, 3, 4, 5, 66, 1);