function fatorial(n) {
    // caso base: fatorial e 0 ou 1 é 1
    if (n == 0 || n == 1 ) {
        return 1;
    }
    // chama a função novamente (recursão)
    return n * fatorial(n - 1);
}
console.log(fatorial(5)); // saida: 120