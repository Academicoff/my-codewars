function nthFibo(n) {
    // Return the n-th number in the Fibonacci Sequence
    if (n === 1) return 0;
    if (n === 2) return 1;
    let a = 1;
    let b = 1;
    for (let i = 4; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

//add Best Solution
//function nthFibo(n) {
//   return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
// }

// function nthFibo(n) {
//     let [prev, curr] = [0, 1];
//     for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
//     return prev;
// }