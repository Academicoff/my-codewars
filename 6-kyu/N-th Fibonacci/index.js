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