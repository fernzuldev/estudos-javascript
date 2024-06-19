function imprimeSoPar(a) {
    while (a > 0) {
        if (a % 2 == 0) {
            console.log(a);
            a -= 2;
        } else {
            a--;
        }
    }
}

imprimeSoPar(8);
imprimeSoPar(9);