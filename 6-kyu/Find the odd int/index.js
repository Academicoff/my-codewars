function findOdd(A) {
    for(let i = 0; i < A.length; i++){
        let count = A.filter(value => value === A[i]).length;
        if(count % 2 == 1){
            return A[i];
        }
    }
    return -1;
}