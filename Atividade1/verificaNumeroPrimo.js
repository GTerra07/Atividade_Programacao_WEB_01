// Importa o módulo 'readline' para lidar com a entrada e saída de dados no terminal.
const readline = require('readline');

// Cria uma instância de Interface do readline, configurando a entrada como 'process.stdin' (entrada padrão) e a saída como 'process.stdout' (saída padrão).
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que verifica se um número é primo.
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  if (number <= 3) {
    return true;
  }

  // Verifica se o número é divisível por 2 ou 3.
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  // Verifica se o número é divisível por algum número na forma 6k ± 1, onde k é um inteiro.
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  // Se nenhum dos casos acima for verdadeiro, o número é considerado primo.
  return true;
}

// Função que imprime se um número é primo ou não.
function printPrimeCheck(number) {
  if (isPrime(number)) {
    console.log('1 - O número é primo.');
  } else {
    console.log('0 - O número não é primo.');
  }
}

// Pergunta ao usuário para digitar um número inteiro.
rl.question('Digite um número inteiro: ', (userInput) => {
  // Converte o input do usuário para um número inteiro.
  const number = parseInt(userInput);

  // Chama a função para verificar e imprimir se o número é primo ou não.
  printPrimeCheck(number);

  // Fecha a interface readline, encerrando o programa.
  rl.close();
});
