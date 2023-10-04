// Definição da matriz A
const A = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  
  // Impressão da matriz A
  console.log("Matriz A:");
  console.log(A);
  
  // Transposição da matriz A
  const AT = A[0].map((_, colIndex) => A.map(row => row[colIndex]));
  
  // Impressão da matriz transposta
  console.log("Matriz transposta:");
  console.log(AT);