function realizarOperacao(operacao, valor1, valor2) {
  var resultado;
  
  if (operacao === "+") {
    resultado = valor1 + valor2;
  } else if (operacao === "-") {
    resultado = valor1 - valor2;
  } else if (operacao === "*") {
    resultado = valor1 * valor2;
  } else if (operacao === "/") {
    resultado = valor1 / valor2;
  } else {
    console.log("Operação inválida");
    return;
  }
  
  return resultado;
}

var operacoes = ["+", "-", "*", "/"];
var numero1 = 10;
var numero2 = 3;
var numero3 = 5;

for (var i = 0; i < operacoes.length; i++) {
  var resultado = realizarOperacao(operacoes[i], numero1, numero2);
  console.log(`Resultado da operação ${operacoes[i]}: ${resultado}`);
  numero3 = resultado;
}

console.log("Numero 1:", numero1);
console.log("Numero 2:", numero2);
console.log("Numero 3:", numero3);
''