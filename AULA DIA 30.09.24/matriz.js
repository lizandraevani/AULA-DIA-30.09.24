// EXEMPLO DE IMPLEMENTAÇÃO DE MATRIZ (ARRAYS DE ARRAYS)

//definindo uma matriz 2x3 (2 linhas e 3 colunas)

let matriz = [
    [1, 2, 3], // primeira linha
    [4, 5, 6] // segunda linha
];

// acessando um elemento especiico
console.log(matriz[0][1]); // saída: 2 (elemento da primeira linha e segunda)

// modificando um elemento especifico
matriz[1][2] = 10;
console.log(matriz[1][2]); // saída: 10 (segunda linha, terceira coluna)

// iterando sobre os elementos de uma matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`elemento na posição [${i}][${j}] = ${matriz[i][j]}`);
    }
}