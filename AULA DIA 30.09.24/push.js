//o que é um método?
// um método é uma função que "pertence" a um objeto ou classe
// push permite acrescentar novos elementos no final de um array

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[numbers.length] = 10;

numbers.push(11);
numbers.push(12, 13);

console.log(numbers)