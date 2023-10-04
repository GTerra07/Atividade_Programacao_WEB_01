function multiplicarMatrizes(A, B) {
    let linhasA = A.length;
    let colunasA = A[0].length;
    let linhasB = B.length;
    let colunasB = B[0].length;

    if (colunasA !== linhasB) {
        console.log("Não é possível calcular");
        return;
    }

    let C = [];
    for (let i = 0; i < linhasA; i++) {
        C[i] = [];
        for (let j = 0; j < colunasB; j++) {
            C[i][j] = 0;
            for (let k = 0; k < colunasA; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return C;
}

let A = [[1, 3], [2, 5]];
let B = [[2, 2], [0, 1]];
let C = multiplicarMatrizes(A, B);
console.log(C);