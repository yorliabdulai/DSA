function SumMatrices(Matrix1, Matrix2){
    const result = [];
    for(let i =0;i<Matrix1.length; i++){
        const sum = [];
        for(let j=0;j<Matrix1[i].length; j++){ 
           sum[i][j] = Matrix1[i][j] + Matrix2[i][j];
        } 
        result += sum; 
    }
    return result;
}