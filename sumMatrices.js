function SumMatrices(Matrix1, Matrix2){
    const result = [];
    for(let i = 0; i < Matrix1.length; i++){
        const sum = [];
        for(let j = 0; j < Matrix1[i].length; j++){ 
            sum.push(Matrix1[i][j] + Matrix2[i][j]);
        } 
        result.push(sum); 
    }
    return result;
}

const Matrix1 = [[1, 2], [3, 4]];
const Matrix2 = [[5, 6], [7, 8]];
const resultMatrix = SumMatrices(Matrix1, Matrix2);
console.log("Sum of the matrices:", resultMatrix);
