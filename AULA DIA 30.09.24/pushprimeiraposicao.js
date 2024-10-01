//inserindo um elemento na primeira posição
//Vamos agora supor que precisamos acrescentar um novo elemento ao array (número -1) e que gostaríamos de inseri-lo na primeira posição, e não na última.
//Temos que deixar a primeira posição livre, deslocando os elementos para a direita

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10;

numbers.push(11);
numbers.push(12, 13);

Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
};
numbers.insertFirstPosition(-1);
console.log(numbers);